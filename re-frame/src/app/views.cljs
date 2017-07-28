(ns app.views
  (:require
   [app.components.counter.views :as counter]))

(defn app []
  [:div
   [counter/counter :unique]
   [counter/counter :duplicated]
   [counter/counter :duplicated]
   [counter/stateful-counter]])
