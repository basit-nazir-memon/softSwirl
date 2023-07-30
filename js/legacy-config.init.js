
if (CQ_Analytics && CQ_Analytics.ProfileDataMgr) {
    CQ_Analytics.ProfileDataMgr.addListener("update", function(event, property) {
        var authorizableId = this.getProperty("authorizableId");
        if (!authorizableId || authorizableId == "anonymous") {
            $CQ(".cq-cc-profile-not-anonymous").hide();
            $CQ(".cq-cc-profile-anonymous").show();
        } else {
            $CQ(".cq-cc-profile-not-anonymous").show();
            $CQ(".cq-cc-profile-anonymous").hide();
        }
    });

    
        CQ_Analytics.ProfileDataMgr.loadInitProperties({
  "avatar": "/etc.clientlibs/settings/wcm/designs/default/resources/social/avatar.png",
  "path": "/home/users/Z/ZdYd-rF1O6Axk-Gtr8vz/profile",
  "isLoggedIn": false,
  "isLoggedIn_xss": "false",
  "authorizableId": "anonymous",
  "authorizableId_xss": "anonymous",
  "formattedName": "anonymous",
  "formattedName_xss": "anonymous"
});
    

    CQ_Analytics.ProfileDataMgr.init();
}

    
    if (CQ_Analytics && CQ_Analytics.CartMgr) {
        CQ_Analytics.CartMgr.updateUrl = "null";
        CQ_Analytics.CartMgr.promotionsMap = null;
        CQ_Analytics.CartMgr.serverPromotionsMap = null;
        CQ_Analytics.CartMgr.data = {};
        CQ_Analytics.CartMgr.init();
    }





if( CQ_Analytics && CQ_Analytics.SurferInfoMgr) {
    CQ_Analytics.SurferInfoMgr.loadInitProperties({
  "IP": "199.167.201.103, 23.38.191.173, 23.202.47.12, 23.50.233.124, 10.70.13.153",
  "keywords": ""
}, true);
}
CQ_Analytics.GeolocationUtils.init("geolocation");






if ( CQ_Analytics && CQ_Analytics.CampaignMgr ) {


	var campaigns = [];
	CQ_Analytics.CampaignMgr.addInitProperty('campaigns', campaigns);
	CQ_Analytics.CampaignMgr.init();
}
if( CQ_Analytics && CQ_Analytics.TagCloudMgr) {
    CQ_Analytics.TagCloudMgr.init([
]);
}




