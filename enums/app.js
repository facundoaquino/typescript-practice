var badState;
(function (badState) {
    badState[badState["InProgress"] = 0] = "InProgress";
    badState[badState["Success"] = 1] = "Success";
    badState[badState["Fail"] = 2] = "Fail";
})(badState || (badState = {}));
// infiere los indices numericos
badState.InProgress;
badState.Success;
badState.Fail;
var badCheckState = function (state) {
    //...
};
badCheckState(100);
var goodStateEnum;
(function (goodStateEnum) {
    goodStateEnum["InProgress"] = "InProgress";
    goodStateEnum["Success"] = "Success";
    goodStateEnum["Fail"] = "Fail";
})(goodStateEnum || (goodStateEnum = {}));
var goodCheckState = function (state) {
    //...
};
goodCheckState(goodStateEnum.Fail);
