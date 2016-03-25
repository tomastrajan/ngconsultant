import { Component } from "angular2/core";

@Component({
    selector: "services",
    template: `
        <div>
            <h2>Services Headers</h2>
            <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit. In mollis mauris orci, a 
            consectetur felis cursus gravida. Proin elementum mauris eget lorem consectetur suscipit. Morbi aliquet
             magna non lorem pulvinar, at eleifend dolor suscipit. Morbi vitae euismod nunc. Donec accumsan, lacus
              laoreet rhoncus rutrum, ligula ipsum commodo justo, varius mattis tortor tellus id libero. Duis euismod
               nunc nulla, et pellentesque odio pellentesque et. Nam eget sodales mauris.</p>
            <a class="waves-effect waves-light btn">Stuff</a>
            <div class="collection">
                <a href="#!" class="collection-item">Alan<span class="badge">1</span></a>
                <a href="#!" class="collection-item">Alan<span class="new badge">4</span></a>
                <a href="#!" class="collection-item">Alan<span class="new badge">4</span></a>
                <a href="#!" class="collection-item">Alan<span class="new badge">4</span></a>
                <a href="#!" class="collection-item">Alan<span class="new badge">4</span></a>
                <a href="#!" class="collection-item">Alan</a>
                <a href="#!" class="collection-item">Alan<span class="badge">14</span></a>
              </div>
            <table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Value</td>
                    </tr>
                </thead>    
                <tbody>
                    <tr>
                        <td>aaa</td>
                        <td>2</td>
                    </tr>
                </tbody>    
            </table>
        </div>
    `
})
export default class ServicesComponent {}
