module App.Component where

import App.Component.Counter as Counter
import Data.Tuple (Tuple(..))
import Prelude hiding (div)
import Pux (EffModel)
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML (div, button)
import Text.Smolder.HTML.Attributes (keytype)
import Text.Smolder.Markup (text, (!))

type Event = Counter.Event

type State = {
    counter :: Counter.State
}

foldp :: forall fx. Event -> State -> EffModel State Event fx
foldp e@(Tuple Counter.Inc id) s = {state: {counter: Counter.update e s.counter}, effects: []}

app :: State -> HTML Event
app s =
    div do
        Counter.counter s.counter "unique"
        Counter.counter s.counter "duplicated"
        Counter.counter s.counter "duplicated"
        button ! keytype "button" $ text "stateful counter: Not implemented"
