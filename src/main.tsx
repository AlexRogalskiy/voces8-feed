import { render, h } from "preact";
import { App } from "./app";
import "./index.css";

const renderApp = () => {
    const element = document.getElementById("voces8-feed");
    console.log("onInitialize is running");
    if (element) {
        console.log("Element found, running preact");
        render(<App/>, element);
    }
}

if (import.meta.env.DEV) {
    renderApp();
} else {
    /**
     * Squarespace loads pages via ajax, so this script might not be executed when we reach the right page.
     * Squarespace provides an `onInitialize` function that gets run when the ajax page has loaded
     */
    // @ts-ignore
    window.Squarespace.onInitialize(Y, renderApp);
}

