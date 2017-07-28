(ns app.components.counter.subs
  (:require
   [re-frame.core :refer [reg-sub]]))

(reg-sub
 :counter
 (fn [db [_ id]]
   (or (get-in db [:counter id]) 0)))
