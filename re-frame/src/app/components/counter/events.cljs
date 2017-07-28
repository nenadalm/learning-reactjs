(ns app.components.counter.events
  (:require
   [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :counter-inc
 (fn [db [_ id]]
   (update-in db [:counter id] inc)))

