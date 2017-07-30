module Main where

import Prelude
import Pux (start)
import Pux.Renderer.React (renderToDOM)
import App.Component as Component
import Data.Map (empty)

main = do
  app <- start
    { initialState: {counter: empty}
    , view: Component.app
    , foldp: Component.foldp
    , inputs: []
    }
  renderToDOM "#app" app.markup app.input
