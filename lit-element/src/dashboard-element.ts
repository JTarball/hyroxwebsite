import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './discover-card-element';
import './tag-element';
import './mini-card-element';
import './simple-mini-card-element';
import './list-element';

@customElement('dashboard-element')
export class DashboardElement extends LitElement {
  static override styles = css`
    .info-box {
      overflow: hidden;
      border-bottom: 1px solid rgba(230, 230, 230, 1);
    }

    .info-box .info-col-2 {
      box-sizing: border-box;
      float: left;
      width: 50%;
      padding: 0;
      min-height: 50px;
    }

    .info-box .info-col-3 {
      box-sizing: border-box;
      float: left;
      width: 33.3%;
      padding: 0;
      min-height: 50px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .info-box .info-col-4 {
        box-sizing: border-box;
        float: left;
        width: 25%;
        padding: 0;
        min-height: 50px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

    .section {
      display: block;
      flex-direction: column;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(230, 230, 230, 1);
    }

    .no-border {
      border: none;
    }

    .section-title {
        font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system,
          BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.083em;
          line-height: 18px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(41, 41, 41, 1);
      }
  

  `;

  override render() {
    const items = [
      {name: 'What is Hyrox?', href: ''},
      {name: 'How hard is Hyrox?', href: ''},
      {name: 'Can a begineer do a Hyrox?', href: ''},
      {name: 'A begineer guide to Hyrox', href: ''},
      {name: 'The history of hyrox', href: ''},
    ];

    const items_guides = [
      {name: 'How to Structure you Hyrox Training', href: ''},
      {name: 'Ultimate Hyrox Training Guide', href: ''},
      {name: 'Hyrox Q & A', href: ''},
      {name: 'Training Guide', href: ''},
      {name: 'Tips & Tricks Per Station', href: ''},
      {name: 'Movement Standards', href: ''},
      {name: 'Hyrox PFT Guide', href: ''},
      {name: 'Ultimate List of Hyrox Workouts', href: ''},
      {name: 'A begineer guide to Hyrox', href: ''},
    ];

    const items_resources = [
        {name: 'Hyrox Rules', href: ''},
        {name: 'Hyrox Double Rules', href: ''},
        {name: 'Hyrox Relay Rules', href: ''},
        {name: 'Hyrox Training Plan', href: ''},
        {name: 'Hyrox Workouts', href: ''},
      ];
  

    const items_must_read = [
      {name: 'Hyrox London 2022: The Aftermath', href: ''},
      {name: 'Running Gear', href: ''},
    ];

    const items_recovery = [
        {name: 'How to maximum recovery', href: ''},
        {name: 'Supplements we use', href: ''},
        {name: 'Tech we use', href: ''},
    ];

    const items_gear = [
        {name: 'Shoes', href: ''},
        {name: 'Running Gear', href: ''},
    ];




    return html`
      <div class="info-box">

        <div class="info-col-4">
          <div class="section">
            <list-element title="Welcome" .items=${items}></list-element>
          </div>
          <div class="section ">
            <list-element title="Guides" .items=${items_guides}></list-element>
          </div>
          <div class="section no-border">
            <list-element title="Resources" .items=${items_resources}></list-element>
          </div>
        </div>

        <div class="info-col-4">
          <list-element title="Must Reads" .items=${items_must_read}></list-element>
        </div>

        <div class="info-col-4">
            <div class="section">
                <span class="section-title">Hyrox Workouts</span>
                <simple-mini-card-element></simple-mini-card-element>
                <simple-mini-card-element></simple-mini-card-element>
                <simple-mini-card-element></simple-mini-card-element>
            </div>
        </div>

        <div class="info-col-4">
            <div class="section">
                <discover-card-element title="Discover">
                    <tag-element name="Motivation"></tag-element>
                    <tag-element name="Hyrox Comp Analysis"></tag-element>
                    <tag-element name="Tips & Tricks"></tag-element>
                    <tag-element name="Movement Standards"></tag-element>
                    <tag-element name="Power Endurance"></tag-element>
                    <tag-element name="Max Strength"></tag-element>
                    <tag-element name="Full Body"></tag-element>
                    <tag-element name="Hyrox Workouts"></tag-element>
                    <tag-element name="Running"></tag-element>
                    <tag-element name="Ski Erg"></tag-element>
                    <tag-element name="Sled Push"></tag-element>
                    <tag-element name="Sled Pull"></tag-element>
                    <tag-element name="Burpee Broad Jumps"></tag-element>
                    <tag-element name="Rowing"></tag-element>
                    <tag-element name="Farmers Carry"></tag-element>
                    <tag-element name="Sandbag Lunges"></tag-element>
                    <tag-element name="Wall Balls"></tag-element>
                    <tag-element name="Must Reads"></tag-element>
                </discover-card-element>
            </div> 



          <div class="section">
            <list-element title="Recovery & Health" .items=${items_recovery}></list-element>
          </div>         
          <div class="section no-border">
            <list-element title="Gear" .items=${items_gear}></list-element>
          </div>   




          
          <!-- <mini-card-element></mini-card-element> -->
        </div>
      </div>
    `;
  }
}
