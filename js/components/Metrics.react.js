import { render } from "react-dom";
import  React, {Component} from "react";
import axios from 'axios';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from "react-fusioncharts";
import NavMetricsSkillPage from "./NavMetricsSkillPage.react";


  // Pass fusioncharts as a dependency of charts
  charts(FusionCharts)

export default class Metrics extends Component{

        myDataSource1={chart:{caption:"eQ",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:30},{label:"skill sufficient",value:60},{label:"skill surplus",value:30}]}

        myDataSource2={chart:{caption:"eQ",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:20},{label:"skill sufficient",value:60},{label:"skill surplus",value:20}]}

        myDataSource3={chart:{caption:"eQ",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:25},{label:"skill sufficient",value:40},{label:"skill surplus",value:35}]}

        myDataSource4={chart:{caption:"Merchant Processing System",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:20},{label:"skill sufficient",value:40},{label:"skill surplus",value:20}]}

        myDataSource5={chart:{caption:"Merchant Processing System",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:35},{label:"skill sufficient",value:42},{label:"skill surplus",value:23}]}

        myDataSource6={chart:{caption:"Merchant Processing System",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:45},{label:"skill sufficient",value:30},{label:"skill surplus",value:25}]}

        myDataSource7={chart:{caption:"Cards MFD",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:22},{label:"skill sufficient",value:38},{label:"skill surplus",value:40}]}

        myDataSource8={chart:{caption:"Cards MFD",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:39},{label:"skill sufficient",value:31},{label:"skill surplus",value:30}]}

        myDataSource9={chart:{caption:"Cards MFD",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:38},{label:"skill sufficient",value:22},{label:"skill surplus",value:40}]}

        myDataSource10={chart:{caption:"St. George Adelaide Cards",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:25},{label:"skill sufficient",value:42},{label:"skill surplus",value:33}]}

        myDataSource11={chart:{caption:"St. George Adelaide Cards",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:18},{label:"skill sufficient",value:48},{label:"skill surplus",value:34}]}

        myDataSource12={chart:{caption:"St. George Adelaide Cards",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:35},{label:"skill sufficient",value:24},{label:"skill surplus",value:41}]}

        myDataSource13={chart:{caption:"ACE",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:25},{label:"skill sufficient",value:23},{label:"skill surplus",value:52}]}

        myDataSource14={chart:{caption:"ACE",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:26},{label:"skill sufficient",value:34},{label:"skill surplus",value:40}]}

        myDataSource15={chart:{caption:"ACE",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:37},{label:"skill sufficient",value:33},{label:"skill surplus",value:30}]}

        myDataSource16={chart:{caption:"AcquireNow",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:45},{label:"skill sufficient",value:12},{label:"skill surplus",value:9}]}

        myDataSource17={chart:{caption:"AcquireNow",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:25},{label:"skill sufficient",value:12},{label:"skill surplus",value:9}]}

        myDataSource18={chart:{caption:"AcquireNow",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:32},{label:"skill sufficient",value:36},{label:"skill surplus",value:32}]}

        myDataSource19={chart:{caption:"Tallyman",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:35},{label:"skill sufficient",value:25},{label:"skill surplus",value:40}]}

        myDataSource20={chart:{caption:"Tallyman",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:26},{label:"skill sufficient",value:36},{label:"skill surplus",value:38}]}

        myDataSource21={chart:{caption:"Tallyman",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:35},{label:"skill sufficient",value:26},{label:"skill surplus",value:39}]}

        myDataSource22={chart:{caption:"Back office Systems",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:29},{label:"skill sufficient",value:42},{label:"skill surplus",value:29}]}

        myDataSource23={chart:{caption:"Back office Systems",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:26},{label:"skill sufficient",value:46},{label:"skill surplus",value:28}]}

        myDataSource24={chart:{caption:"Back office Systems",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:18},{label:"skill sufficient",value:36},{label:"skill surplus",value:46}]}

        myDataSource25={chart:{caption:"GFMP",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:19},{label:"skill sufficient",value:37},{label:"skill surplus",value:44}]}

        myDataSource26={chart:{caption:"GFMP",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:43},{label:"skill sufficient",value:17},{label:"skill surplus",value:40}]}

        myDataSource27={chart:{caption:"GFMP",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:23},{label:"skill sufficient",value:41},{label:"skill surplus",value:36}]}

        myDataSource28={chart:{caption:"LOS",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:23},{label:"skill sufficient",value:46},{label:"skill surplus",value:31}]}

        myDataSource29={chart:{caption:"LOS",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:36},{label:"skill sufficient",value:22},{label:"skill surplus",value:42}]}

        myDataSource30={chart:{caption:"LOS",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:34},{label:"skill sufficient",value:46},{label:"skill surplus",value:20}]}

        myDataSource31={chart:{caption:"LOSBPM",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:28},{label:"skill sufficient",value:52},{label:"skill surplus",value:20}]}

        myDataSource32={chart:{caption:"LOSBPM",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:35},{label:"skill sufficient",value:45},{label:"skill surplus",value:20}]}

        myDataSource33={chart:{caption:"LOSBPM",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:25},{label:"skill sufficient",value:45},{label:"skill surplus",value:30}]}

        myDataSource34={chart:{caption:"PCCS,CPM,GCS,OPE",subcaption:"2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"ocean"},data:[{label:"Skill deficit",value:30},{label:"skill sufficient",value:30},{label:"skill surplus",value:40}]}

        myDataSource35={chart:{caption:"PCCS,CPM,GCS,OPE",subcaption:"Change 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"zune"},data:[{label:"Skill deficit",value:15},{label:"skill sufficient",value:60},{label:"skill surplus",value:25}]}

        myDataSource36={chart:{caption:"PCCS,CPM,GCS,OPE",subcaption:"Run 2017",startingangle:"130",showlabels:"0",showlegend:"1",enablemultislicing:"0",slicingdistance:"15",showpercentvalues:"1",showpercentintooltip:"0",plottooltext:"Skills : $label Total visit : $datavalue",theme:"carbon"},data:[{label:"Skill deficit",value:25},{label:"skill sufficient",value:50},{label:"skill surplus",value:25}]}
         
        myDataSource37={ chart: {
          caption: "PCCS,CPM,GCS,OPE",
          subCaption: "2017",
          // numberPrefix: "$",
          theme: "ocean"
      },
      data: [{label:"Skill deficit",value:25},{label:"skill sufficient",value:50},{label:"skill surplus",value:25}]}
      
        myDataSource38 = {
          chart: {
              caption: "PCCS,CPM,GCS,OPE",
              subCaption: "2017",
              // numberPrefix: "$",
              theme: "ocean"
          },
          data: [{label:"Skill deficit",value:25},{label:"skill sufficient",value:50},{label:"skill surplus",value:25}]
      };
       
        render(){
        //const {profileData} = this.props.data;
        console.log("inside metrics >>> render")
        return(
        <div>
        <NavMetricsSkillPage/>  
        <div className="first">
        {/* <ReactFC      
        id= "Application_Skill_chart"
        type= "column2d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource38}       
        />
        <ReactFC      
        id= "Application_skill_chart"
        type= "mscombi2d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource37}       
        /> */}
        <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource1}       
        />
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource2}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource3}       
        />
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource4}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource5}       
        />
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource6}       
        />
        </div>
        <div className="first">
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource7}       
        />
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource8}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource9}       
        />
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource10}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource11}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource12}       
        />
        </div>
        <div className="first">
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource13}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource14}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource15}       
        />
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource16}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource17}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource18}       
        />
        </div>
        <div className="first">
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource19}       
        />            
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource20}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource21}       
        />
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource22}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource23}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource24}  
        />
        </div>
        <div className="first">
        <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource25} 
        />
        <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource26} 
        />
        <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource27}      
        />
        </div>
        <div className="first">
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource28}       
        />            
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource29}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource30}       
        />
        </div>
        <div className="first">
       <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource31}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource32}       
        />
         <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource33}  
        />
        <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource34} 
        />
        <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource35} 
        />
        <ReactFC      
        id= "pie_chart"
        type= "pie3d" 
        width="30%"
        height={300}
        dataFormat="JSON"
        dataSource={this.myDataSource36}      
        />
        </div>
        </div>
        )
    }

      }


