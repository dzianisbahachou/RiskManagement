sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/risks/test/integration/FirstJourney',
		'riskmanagement/risks/test/integration/pages/RisksList',
		'riskmanagement/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start test/flpSandbox.html?sap-ui-xx-viewCache=false#riskmanagementrisks-tile in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/risks') + '/test/flpSandbox.html?sap-ui-xx-viewCache=false#riskmanagementrisks-tile'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);