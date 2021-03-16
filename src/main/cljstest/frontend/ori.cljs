(ns cljstest.frontend.app
    (:require [reagent.core :as reagent]
              [reagent.dom :as rdom]))

(defn home []
  [:div "should be some text"])

(defn ^:export init []
  (rdom/render [home] (.getElementById js/document "app")))
