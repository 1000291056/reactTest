/**
 * Created by wufeifei on 2017/2/14.
 */
function Good() {
    // this.name = "apple";
    // this.count = 1;
    // this.showInfo = function () {
    //     alert("商品：" + this.name);
    // }
}
function test() {
    require(["jquery","testshim"], function (jq,testshim) {
        jq(".text").text("the world");
        alert("aaa");
        testshim.showShimCfg();
    })
}