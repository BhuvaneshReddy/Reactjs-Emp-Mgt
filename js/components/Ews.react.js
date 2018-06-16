import React, { Component } from 'react';
import NavProfile from "./NavProfile.react";
import { connect } from 'react-redux';
import { BootstrapTable, striped, hover, condensed, bordered } from "react-bootstrap-table";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { browserHistory } from "react-router";
import { EwsData } from "../../ewsdata";
import ewsDataAction from "../actions/AppActions";
const assign = Object.assign || require('object.assign');
export default class Ews extends Component{
    
    componentDidMount(){
        this.props.dispatch(ewsDataAction())                            
        }
      handleAfterSearch = (searchText, result) => {
        if (searchText === '') {
          this.refs.table.cleanSelected();
          this.rowEmail=''
        }
    }
    createCustomSearchField = (props) => {
        return (
          <SearchField
            className='my-custom-class'
            defaultValue={ props.defaultSearch }
            placeholder={ props.searchPlaceholder }/>
        );
      }
    isExpandableRow = (row) => {
        if (row.id != '') return true;
          else return false;
      }  

      expandComponent = (row) => {
        const {ewsData} =this.props.data
        //  const {resourceSkillData} =this.props.data;
        //  console.log("inside EmployeePage >>> inside expandComponent "+JSON.stringify(row))
        //  console.log("inside EmployeePage >>> inside expandComponent >>>rowid")
        //  console.log(" this.props.data >>> "+JSON.stringify(this.props.data))
        //  console.log("inside EmployeePage >>> inside expandComponent >>> baseskilljson"+JSON.stringify(baseSkillData.objects))
        var jsonString = "["+ JSON.stringify(row) + "]"
        var jsonObj = JSON.parse(jsonString)
        // console.log(jsonObj)
            var rows = []

            // (baseSkillData.objects).map((baseSkillItem,index) => {
            // console.log("inside EMployeePage >>> baseskilldata >>> value "+baseSkillItem)

    for(var i=0;i<ewsData.length;i++)
    {  // console.log("row.applicationName >>> "+row.applicationName)
    //&& (row.moduleName === baseSkillData.objects[i].moduleName) && (row.programName === baseSkillData.objects[i].programName
        if(row.applicationName === baseSkillData.objects[i].applicationName){
                rows.push(<BootstrapTable data={ JSON.parse("["+JSON.stringify(baseSkillData.objects[i])+"]") }>
                {/* <TableHeaderColumn colspan='3' dataSort csvHeader='Skills Demand' headerAlign='right'>Skills Demand</TableHeaderColumn> */}
               <TableHeaderColumn dataField='powerBuilder' isKey={true} >Power Builder</TableHeaderColumn>
               <TableHeaderColumn dataField='lotusNotesScripting' width='200px' >Lotus Notes Scripting</TableHeaderColumn>
               <TableHeaderColumn dataField='cobal_CICS' width='200px' >COBAL_CICS</TableHeaderColumn>
               <TableHeaderColumn dataField='ims_JCL' width='200px' >IMS_JCL</TableHeaderColumn>
               <TableHeaderColumn dataField='cpas' width='200px' >CPAS</TableHeaderColumn>
               <TableHeaderColumn dataField='filenetReportManager' width='200px' >Filenet Report Manager</TableHeaderColumn>
               <TableHeaderColumn dataField='wdp_UI' width='200px' >WDP_UI</TableHeaderColumn>
               <TableHeaderColumn dataField='wdp_MICROSERVICES' width='200px' >WDP_MICROSERVICES</TableHeaderColumn>
               <TableHeaderColumn dataField='wdp_BPEL' width='200px' >WDP_BPEL</TableHeaderColumn>
               <TableHeaderColumn dataField='wdp_BPM' width='200px' >WDP_BPM</TableHeaderColumn>
               <TableHeaderColumn dataField='base24Tandem' width='200px' >Base24(Tandem)</TableHeaderColumn>
               <TableHeaderColumn dataField='filenetImageServer'width='200px' >Filenet Image Server</TableHeaderColumn>
               <TableHeaderColumn dataField='microsoftSQLServer' width='200px' >Microsoft SQL Server</TableHeaderColumn>
               <TableHeaderColumn dataField='java' width='200px' >Java</TableHeaderColumn>
               <TableHeaderColumn dataField='coding' width='200px' >Coding</TableHeaderColumn>
               <TableHeaderColumn dataField='analytcal' width='200px' >Analytical</TableHeaderColumn>
               <TableHeaderColumn dataField='bootstrap' width='200px' >Bootstrap</TableHeaderColumn>
               <TableHeaderColumn dataField='csharpDOTNET' width='200px' >Csharp .Net</TableHeaderColumn>
               <TableHeaderColumn dataField='plsql' width='200px' >PlSQL</TableHeaderColumn>
               <TableHeaderColumn dataField='unix'  width='200px' >Unix</TableHeaderColumn>
               <TableHeaderColumn dataField='vbDOTNET' width='200px' >VB .NET</TableHeaderColumn>
               <TableHeaderColumn dataField='webservice' width='200px' >Webservice</TableHeaderColumn>
               <TableHeaderColumn dataField='javascript'width='200px' >Javascript</TableHeaderColumn>
               <TableHeaderColumn dataField='hibernate'width='200px' >Hibernate</TableHeaderColumn>
               <TableHeaderColumn dataField='spring' width='200px' >Spring</TableHeaderColumn>
               <TableHeaderColumn dataField='ejb' width='200px' >EJB</TableHeaderColumn>
               <TableHeaderColumn dataField='fileNet' width='200px' >Filenet</TableHeaderColumn>
               <TableHeaderColumn dataField='j2ee' width='200px' >J2EE</TableHeaderColumn>
               <TableHeaderColumn dataField='angularJS' width='200px' >Angular js</TableHeaderColumn>
               <TableHeaderColumn dataField='websphereApplicationSever'width='200px' >Websphere Application Server</TableHeaderColumn>
               <TableHeaderColumn dataField='websphereMQ' width='200px' >Websphere MQ</TableHeaderColumn>
               <TableHeaderColumn dataField='xml' width='200px' >XML</TableHeaderColumn>
               <TableHeaderColumn dataField='splunk' width='200px' >Splunk</TableHeaderColumn>
               <TableHeaderColumn dataField='tallymanConfiguration'width='200px' >Tallyman Configuration</TableHeaderColumn>
               <TableHeaderColumn dataField='devops' width='200px' >DevOps</TableHeaderColumn>
               <TableHeaderColumn dataField='db2_sql'width='200px' >Db2_SQL</TableHeaderColumn>
               <TableHeaderColumn dataField='controlM'width='200px' >ControlM</TableHeaderColumn>
               <TableHeaderColumn dataField='html'width='200px' >HTML</TableHeaderColumn>
               <TableHeaderColumn dataField='jenkins'width='200px' >Jenkins</TableHeaderColumn>
               <TableHeaderColumn dataField='financialServiceoverview' width='200px' >FInancial Service Overview</TableHeaderColumn>
               <TableHeaderColumn dataField='cards' width='200px' >Cards</TableHeaderColumn>
               <TableHeaderColumn dataField='ticketResolution' width='200px' >Ticket Resolution</TableHeaderColumn>
               <TableHeaderColumn dataField='jobMonitoring' width='200px' >Job Monitoring</TableHeaderColumn>
               <TableHeaderColumn dataField='lowLevelDesign' width='200px' >Low Level Design</TableHeaderColumn>
               <TableHeaderColumn dataField='minorBAUWork' width='200px' >Minor BAU Work</TableHeaderColumn>
               <TableHeaderColumn dataField='deployment' width='200px' >Deployment</TableHeaderColumn>
               <TableHeaderColumn dataField='testing' width='200px' >Testing</TableHeaderColumn>
               <TableHeaderColumn dataField='architecture' width='200px' >Architecture</TableHeaderColumn>
               <TableHeaderColumn dataField='featuresFunctionalites' width='200px' >Features Functionalities</TableHeaderColumn>
               <TableHeaderColumn dataField='codeComplexity' width='200px' >Code Complexity</TableHeaderColumn>
               <TableHeaderColumn dataField='interfacing' width='200px' >Interfacing</TableHeaderColumn>
               <TableHeaderColumn dataField='deployment2' width='200px' >Deployment2</TableHeaderColumn>
               <TableHeaderColumn dataField='requirementAnalysis' width='200px' >Requirement Analysis</TableHeaderColumn>
                </BootstrapTable>)
            }
        }
        return (
            <div>
            <div  className="text-justify" className="font-weight-bold" className="p-3 mb-2 bg-info text-white">Ews</div>
            {rows}  
            <div  className="text-justify" className="font-weight-bold" className="p-3 mb-2 bg-info text-white">Resource Skills</div>
            <BootstrapTable data={ jsonObj }>            
            <TableHeaderColumn dataField='powerBuilder' isKey={true} columnClassName ={columnClassNameFormat} editableByCell={checkEditable}  dataFormat={ skillColorFormatterpowerBuilder }>Power Builder</TableHeaderColumn>
            <TableHeaderColumn dataField='lotusNotesScripting' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterlotusNotesScripting }>Lotus Notes Scripting</TableHeaderColumn>
            <TableHeaderColumn dataField='cobal_CICS' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattercobal_CICS }>COBAL_CICS</TableHeaderColumn>
            <TableHeaderColumn dataField='ims_JCL' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterims_JCL }>IMS_JCL</TableHeaderColumn>
            <TableHeaderColumn dataField='cpas' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattercpas }>CPAS</TableHeaderColumn>
            <TableHeaderColumn dataField='filenetReportManager' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterfilenetReportManager }>Filenet Report Manager</TableHeaderColumn>
            <TableHeaderColumn dataField='wdp_UI' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterwdp_UI }>WDP_UI</TableHeaderColumn>
            <TableHeaderColumn dataField='wdp_MICROSERVICES' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterwdp_MICROSERVICES }>WDP_MICROSERVICES</TableHeaderColumn>
            <TableHeaderColumn dataField='wdp_BPEL' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterwdp_BPEL }>WDP_BPEL</TableHeaderColumn>
            <TableHeaderColumn dataField='wdp_BPM' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterwdp_BPM }>WDP_BPM</TableHeaderColumn>
            <TableHeaderColumn dataField='base24Tandem' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterbase24Tandem }>Base24(Tandem)</TableHeaderColumn>
            <TableHeaderColumn dataField='filenetImageServer'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterfilenetImageServer}>Filenet Image Server</TableHeaderColumn>
            <TableHeaderColumn dataField='microsoftSQLServer' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattermicrosoftSQLServer }>Microsoft SQL Server</TableHeaderColumn>
            <TableHeaderColumn dataField='java' width='200px' editableByCell={checkEditable} dataFormat={ skillColorFormatterjava } columnClassName ={columnClassNameFormat}>Java</TableHeaderColumn>
            <TableHeaderColumn dataField='coding' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattercoding }>Coding</TableHeaderColumn>
            <TableHeaderColumn dataField='analytcal' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatteranalytcal }>Analytical</TableHeaderColumn>
            <TableHeaderColumn dataField='bootstrap' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterbootstrap }>Bootstrap</TableHeaderColumn>
            <TableHeaderColumn dataField='csharpDOTNET' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattercsharpDOTNET }>Csharp .Net</TableHeaderColumn>
            <TableHeaderColumn dataField='plsql' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterplsql }>PlSQL</TableHeaderColumn>
            <TableHeaderColumn dataField='unix' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterunix }>Unix</TableHeaderColumn>
            <TableHeaderColumn dataField='vbDOTNET' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattervbDOTNET }>VB .NET</TableHeaderColumn>
            <TableHeaderColumn dataField='webservice' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterwebservice }>Webservice</TableHeaderColumn>
            <TableHeaderColumn dataField='javascript'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterjavascript }>Javascript</TableHeaderColumn>
            <TableHeaderColumn dataField='hibernate'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterhibernate }>Hibernate</TableHeaderColumn>
            <TableHeaderColumn dataField='spring' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterspring }>Spring</TableHeaderColumn>
            <TableHeaderColumn dataField='ejb' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterejb }>EJB</TableHeaderColumn>
            <TableHeaderColumn dataField='fileNet' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterfileNet }>Filenet</TableHeaderColumn>
            <TableHeaderColumn dataField='j2ee' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterj2ee }>J2EE</TableHeaderColumn>
            <TableHeaderColumn dataField='angularJS' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterangularJS }>Angular js</TableHeaderColumn>
            <TableHeaderColumn dataField='websphereApplicationSever'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterwebsphereApplicationSever }>Websphere Application Server</TableHeaderColumn>
            <TableHeaderColumn dataField='websphereMQ' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterwebsphereMQ }>Websphere MQ</TableHeaderColumn>
            <TableHeaderColumn dataField='xml' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterxml }>XML</TableHeaderColumn>
            <TableHeaderColumn dataField='splunk' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattersplunk }>Splunk</TableHeaderColumn>
            <TableHeaderColumn dataField='tallymanConfiguration'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattertallymanConfiguration }>Tallyman Configuration</TableHeaderColumn>
            <TableHeaderColumn dataField='devops' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterdevops }>DevOps</TableHeaderColumn>
            <TableHeaderColumn dataField='db2_sql'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterdb2_sql }>Db2_SQL</TableHeaderColumn>
            <TableHeaderColumn dataField='controlM'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattercontrolM }>ControlM</TableHeaderColumn>
            <TableHeaderColumn dataField='html'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterhtml }>HTML</TableHeaderColumn>
            <TableHeaderColumn dataField='jenkins'width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterjenkins }>Jenkins</TableHeaderColumn>
            <TableHeaderColumn dataField='financialServiceoverview' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterfinancialServiceoverview }>FInancial Service Overview</TableHeaderColumn>
            <TableHeaderColumn dataField='cards' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattercards }>Cards</TableHeaderColumn>
            <TableHeaderColumn dataField='ticketResolution' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterticketResolution }>Ticket Resolution</TableHeaderColumn>
            <TableHeaderColumn dataField='jobMonitoring' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterjobMonitoring }>Job Monitoring</TableHeaderColumn>
            <TableHeaderColumn dataField='lowLevelDesign' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterlowLevelDesign }>Low Level Design</TableHeaderColumn>
            <TableHeaderColumn dataField='minorBAUWork' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterminorBAUWork }>Minor BAU Work</TableHeaderColumn>
            <TableHeaderColumn dataField='deployment' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterdeployment }>Deployment</TableHeaderColumn>
            <TableHeaderColumn dataField='testing' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattertesting }>Testing</TableHeaderColumn>
            <TableHeaderColumn dataField='architecture' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterarchitecture }>Architecture</TableHeaderColumn>
            <TableHeaderColumn dataField='featuresFunctionalites' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterfeaturesFunctionalites }>Features Functionalities</TableHeaderColumn>
            <TableHeaderColumn dataField='codeComplexity' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormattercodeComplexity }>Code Complexity</TableHeaderColumn>
            <TableHeaderColumn dataField='interfacing' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterinterfacing }>Interfacing</TableHeaderColumn>
            <TableHeaderColumn dataField='deployment2' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterdeployment2 }>Deployment2</TableHeaderColumn>
            <TableHeaderColumn dataField='requirementAnalysis' width='200px' columnClassName ={columnClassNameFormat} editableByCell={checkEditable} dataFormat={ skillColorFormatterrequirementAnalysis }>Requirement Analysis</TableHeaderColumn>            
            </BootstrapTable>       
            </div>             
           );   
        //    $('#bottom').on('scroll', function () {
        //    $('#top').scrollTop($(this).scrollTop());
        // });         
            }     
    expandColumnComponent = ({ isExpandableRow, isExpanded }) => {
          let content = '';
      
          if (isExpandableRow) {
            content = (isExpanded ? '(-)' : '(+)' );
          } else {
            content = ' ';
          }
          return (
            <div> { content } </div>
          );
        }

    renderShowsTotal(start, to, total) {
        return (
            <p style={ { color: 'blue' } }>
            From { start } to { to }, total is { total }
            </p>
        );
        }

       
    render(){
        const options = {
            clearSearch: true,
            searchField: this.createCustomSearchField,
            afterSearch: this.handleAfterSearch
          };

        // var selectRowProp = {
        //     mode: "radio",
        //     onSelect: this.onRowSelect.bind(this),
        // };

        return(
            <div>
                <NavProfile/>  
                <div className="container__profile-data">
                    <div className="profile-data">                  
                        <BootstrapTable ref='table' data={EwsData}
                            pagination={true} options={options} search={true} select striped hover condensed
                          >
                            <TableHeaderColumn dataField= 'ewsId' isKey={ true } width='30px' dataAlign='center'>Ews Id</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'pMresponsible' width='50px' dataAlign='center'>PM Responsible</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'iBMEmployeeID' width='70px' dataAlign='center'>IBM EmployeeId</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'isCritical' width='50px' dataAlign='center'>Is Critical</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'portfolio' width='50px' dataAlign='center'>Portfolio</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'empName'	width='70px' dataAlign='center'>Employee Name</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'application'	width='70px'dataAlign='center'>Application</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'primarySkillset'	width='80px' dataAlign='center'>Primary Skill Set</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'location' width='50px' dataAlign='center'>Location</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'role' width='80px' dataAlign='center'>Role</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'iBMIorSSPIorIBMC' width='50px' dataAlign='center'>IBMI Or SSPI or IBMC</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'band' width='50px' dataAlign='center'>Band</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'startDate' width='50px' dataAlign='center'>Start date</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'team' width='50px' dataAlign='center'>Team</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'plannedEnddate' width='50px' dataAlign='center'>Planned End Date</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'westpacTenuruasoncurrentMonth' width='150px' dataAlign='center'>Westpac Tenure as on current month</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'growthOpportunity' width='150px' dataAlign='center'>Growth Opportunity</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'personal' width='50px'dataAlign='center'>Personal</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'attitude' width='50px' dataAlign='center'>Attitude</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'eWSScore' width='50px' dataAlign='center'>Ews Score</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'eWSRating' width='50px' dataAlign='center'>Ews Rating</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'remarks'	width='50px' dataAlign='center'>Remarks</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'isRetentionActionsPlanned' width='50px' dataAlign='center'>Is Retention Actions Planned</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'retentionActionsPlanned'	width='50px' dataAlign='center'>Retention actions planned</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'selecttheRetentionActions' width='50px' dataAlign='center'>Select the retention actions</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'plannedSuccessor' width='50px' dataAlign='center'>Panned Successor</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'activitiesPlannedforSuccessor'	width='50px' dataAlign='center'>Activities Planned for Successor</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'percentageofSuccessorReadiness'	width='50px' dataAlign='center'>Percentage of Success Readiness</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'successorReadinessStatus' width='50px'dataAlign='center'>Successor Readiness status</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'successorReadyDate'	width='50px' dataAlign='center'>Successor Ready Date</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'isSuccessorTravelReady' width='50px' dataAlign='center'>Is successor Travel Ready</TableHeaderColumn>
                            <TableHeaderColumn dataField= 'travelReadyDate'	width='50px' dataAlign='center'>Travel Ready date</TableHeaderColumn>
                        </BootstrapTable>                                        
                    </div>
                </div>
            </div>
        );
    }
}

function select(state) {
    return {
      data: state
    };
  }
  
export default connect(select)(Ews);