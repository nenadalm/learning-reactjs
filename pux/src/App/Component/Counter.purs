module App.Component.Counter where

import Prelude

import Data.Map as M
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import Pux.DOM.Events (onClick)
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML (button)
import Text.Smolder.HTML.Attributes (keytype)
import Text.Smolder.Markup (text, (!), (#!))

type State = M.Map String Int

data EventType = Inc

type Event = Tuple EventType String

showCount :: Maybe Int -> String
showCount (Just x) = show x
showCount Nothing = show 0

updateValue :: Maybe Int -> Maybe Int
updateValue (Just x) = Just (x + 1)
updateValue Nothing = Just 1

update :: Event -> State -> State
update (Tuple Inc id) s = M.alter updateValue id s

counter :: State -> String -> HTML Event
counter s id =
    button ! keytype "button" #! onClick (const (Tuple Inc id)) $ text $ id <> ": " <> showCount (M.lookup id s)
