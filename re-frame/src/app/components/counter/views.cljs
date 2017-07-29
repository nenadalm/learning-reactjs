(ns app.components.counter.views
  (:require
   [reagent.core :refer [atom]]
   [re-frame.core :refer [subscribe dispatch]]
   [app.components.counter.events]
   [app.components.counter.subs]))

(defn counter [id]
  [:button
   {:type "button"
    :on-click #(dispatch [:counter-inc id])}
   id ": " @(subscribe [:counter id])])

(defn stateful-counter []
  (let [count (atom 0)]
    (fn []
      [:button
       {:type "button"
        :on-click #(swap! count inc)}
       "stateful counter: " @count])))
