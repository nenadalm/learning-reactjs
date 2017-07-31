module App.Component.Counter where

import Prelude

import Data.Map as M
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import Pux.DOM.Events (onClick)
import Pux.DOM.HTML (HTML)
import Pux.Renderer.React (reactClass)
import React as R
import React.DOM.Dynamic as D
import React.DOM.Props as P
import Text.Smolder.HTML (button)
import Text.Smolder.HTML.Attributes (type')
import Text.Smolder.Markup (text, (!), (#!), MarkupM(..))

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
    button ! type' "button" #! onClick (const (Tuple Inc id)) $ text $ id <> ": " <> showCount (M.lookup id s)

statefulCounter' :: R.ReactClass {count :: Int}
statefulCounter' = R.createClass $ R.spec {count: 0} \ctx -> do
    props <- R.readState ctx
    pure $ D.button [ P.onClick \_ -> do
                         R.readState ctx >>=
                            (\s -> {count: s.count + 1}) >>> R.writeState ctx
                    , P._type "button"
                    ]
                    [ D.text ("stateful counter: " <> show props.count) ]

statefulCounter :: forall e. HTML e
statefulCounter = reactClass statefulCounter' "statefulCounter" (Return unit)
