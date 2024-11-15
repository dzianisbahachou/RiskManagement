using { riskmanagement as rm } from '../db/schema';

/**
 * For serving end users
 */
service RiskService @(path : 'service/risk') {
   entity Risks @(restrict : [
       {
          grant : [ 'READ' ],
          to : [ 'RiskViewer' ]
       },
       {
           grant : [ '*' ],
           to : [ 'RiskManager' ]
       }
   ]) as projection on rm.Risks;


   entity Mitigations @(restrict : [
       {
         grant : [ 'READ' ],
         to : [ 'RiskViewer' ]
       },
       {
         grant : [ '*' ],
         to : [ 'RiskManager' ]
       }
   ]) as projection on rm.Mitigations;
     annotate Mitigations with @odata.draft.enabled;

   @readonly entity BusinessPartners as projection on rm.BusinessPartners;
 }