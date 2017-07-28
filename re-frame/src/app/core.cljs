(ns app.core
  (:require
   [reagent.core :as reagent]
   [app.views :as views]))

(reagent/render
 [views/app]
 (.getElementById js/document "app"))
