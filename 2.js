(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-center-vip-index-index"], {
    "040a": function(e, t, i) {
        var n = i("b7bf");
        "string" === typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        var a = i("4f06").default;
        a("2702dffc", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "0a4e": function(e, t, i) {
        e.exports = i.p + "static/fonts/DIN-Bold.20720c3a.otf"
    },
    "1de5": function(e, t, i) {
        "use strict";
        e.exports = function(e, t) {
            return t || (t = {}),
            e = e && e.__esModule ? e.default : e,
            "string" !== typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
            t.hash && (e += t.hash),
            /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
        }
    },
    "228e": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("8b79")
          , a = i.n(n);
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return n[e]
                }
                ))
            }(r);
        t["default"] = a.a
    },
    "2a27": function(e, t, i) {
        "use strict";
        var n;
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "c", (function() {
            return r
        }
        )),
        i.d(t, "a", (function() {
            return n
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "wrapper"
            }, [i("v-uni-view", {
                staticClass: "container"
            }, [i("v-uni-view", {
                staticClass: "user-section"
            }, [i("v-uni-view", {
                staticClass: "user-avatar"
            }, [i("v-uni-image", {
                attrs: {
                    src: e.userInfo.avatar
                }
            })], 1), i("v-uni-view", {
                staticClass: "user-center"
            }, [i("v-uni-view", {
                staticClass: "user-name one-row"
            }, [e._v(e._s(e.userInfo.nickname))]), i("v-uni-view", {
                staticClass: "user-vip-desc",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goRecord.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", [e._v(e._s(e.vipExpireTime))]), e.boughtFlag ? i("v-uni-image", {
                attrs: {
                    src: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/arrow-right-28x28.png"
                }
            }) : e._e()], 1)], 1), i("v-uni-view", {
                staticClass: "cash-button",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.toCashPage.apply(void 0, arguments)
                    }
                }
            }, [e._v("兑换VIP")])], 1), i("v-uni-view", {
                staticClass: "card-secton"
            }, [i("v-uni-view", {
                staticClass: "section-item-header"
            }, [e._v("请选择购买的会员卡")]), e.$lodash.isEmpty(e.vipCardList) ? i("v-uni-view", {
                staticClass: "empty-view"
            }, [i("v-uni-image", {
                staticClass: "empty-icon",
                attrs: {
                    src: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/empty-vipcard.png"
                }
            }), i("v-uni-view", {
                staticClass: "empty-desc"
            }, [e._v("暂无会员卡")])], 1) : [i("v-uni-view", {
                staticClass: "card-list"
            }, e._l(e.vipCardList, (function(t) {
                return i("v-uni-view", {
                    key: t.vipCardId,
                    staticClass: "card-item",
                    class: {
                        activated: t.vipCardId == e.selectedVipCard.vipCardId
                    },
                    on: {
                        click: function(i) {
                            arguments[0] = i = e.$handleEvent(i),
                            e.selectVipCard(t)
                        }
                    }
                }, [t.discount ? i("v-uni-view", {
                    staticClass: "discount"
                }, [e._v(e._s(t.discount))]) : e._e(), i("v-uni-view", {
                    staticClass: "price"
                }, [i("v-uni-text", [e._v("￥")]), e._v(e._s(t.sellPrice))], 1), i("v-uni-view", {
                    staticClass: "duration"
                }, [e._v(e._s(t.durationStr))]), t.crossPrice ? i("v-uni-view", {
                    staticClass: "cross-price"
                }, [e._v("￥" + e._s(t.crossPrice))]) : e._e()], 1)
            }
            )), 1), i("v-uni-view", {
                staticClass: "buy-button",
                class: {
                    renew: e.boughtFlag
                }
            }, [e._v(e._s(e.userVipInfo.vipFlag ? "立即续费" : "开通" + e.selectedVipCard.durationStr + "会员")), i("v-uni-view", {
                staticClass: "pop-tip"
            }, [e._v(e._s(e.selectedVipCard.unitPrice)), e.selectedVipCard.priceDiff ? i("v-uni-text", [e._v("立省" + e._s(e.selectedVipCard.priceDiff))]) : e._e()], 1), e.selectedVipCard && e.checkedProtocol ? [e.userInfo.bindPhoneFlag ? i("v-uni-button", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.buyVip.apply(void 0, arguments)
                    }
                }
            }) : i("BindPhoneView", {
                on: {
                    onSuccess: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.buyVip.apply(void 0, arguments)
                    },
                    onCancel: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.onCancelBindPhone.apply(void 0, arguments)
                    }
                }
            })] : i("v-uni-button", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.buyVip.apply(void 0, arguments)
                    }
                }
            })], 2), i("v-uni-view", {
                staticClass: "protocol",
                class: {
                    active: e.checkedProtocol
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.checkedProtocol = !e.checkedProtocol
                    }
                }
            }, [e._v("我已阅读并同意"), i("v-uni-text", {
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        arguments[0] = t = e.$handleEvent(t),
                        e.openProtocol.apply(void 0, arguments)
                    }
                }
            }, [e._v("《会员服务协议》")])], 1)]], 2), i("VipPrivilege"), i("v-uni-view", {
                staticClass: "activities-section"
            }, [i("v-uni-view", {
                staticClass: "section-item-header"
            }, [e._v("会员活动")]), i("v-uni-view", {
                staticClass: "activities-content"
            }, [e.$lodash.isEmpty(e.experienceRegisterCard) ? e._e() : i("v-uni-image", {
                attrs: {
                    src: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/new-reg-banner.png"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goNewcomerGiftDetail.apply(void 0, arguments)
                    }
                }
            }), e.$lodash.isEmpty(e.experienceShareCard) ? e._e() : i("v-uni-image", {
                attrs: {
                    src: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/share-vip-banner.png"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goShareActivityDetail.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1), i("ContactModal", {
                ref: "contactModal",
                attrs: {
                    imgUrl: e.companyObj.guideWxImg
                }
            }), i("SetAratarNickNameModal", {
                ref: "setAratarNickNameRef"
            })], 1)
        }
          , r = []
    },
    "2c82": function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.vipOrderApi = void 0;
        var n = i("1e04")
          , a = {
            createVipOrder: function(e) {
                return (0,
                n.postHttp)("/app/vip/order/create", e)
            },
            getVipReceiveFlag: function(e) {
                return (0,
                n.postHttp)("/app/vip/order/receiveFlag", e)
            },
            receiveExperienceCard: function(e) {
                return (0,
                n.postHttp)("/app/vip/order/receiveExperienceCard", e)
            }
        };
        t.vipOrderApi = a
    },
    "2def": function(e, t, i) {
        "use strict";
        var n = i("6d30")
          , a = i.n(n);
        a.a
    },
    "30a50": function(e, t, i) {
        "use strict";
        var n;
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "c", (function() {
            return r
        }
        )),
        i.d(t, "a", (function() {
            return n
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "privilege-section"
            }, [i("v-uni-view", {
                staticClass: "privilege-header"
            }, [e._v("会员尊享特权")]), i("v-uni-view", {
                staticClass: "privilege-list"
            }, e._l(e.privilegeList, (function(t, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "privilege-item"
                }, [i("v-uni-image", {
                    staticClass: "icon",
                    attrs: {
                        src: t.icon
                    }
                }), i("v-uni-view", {
                    staticClass: "title"
                }, [e._v(e._s(t.title))]), i("v-uni-view", {
                    staticClass: "desc"
                }, [e._v(e._s(t.desc))])], 1)
            }
            )), 1), i("v-uni-view", {
                staticClass: "privilege-more"
            }, [e._v("—— 更多特权 敬请期待 ——")])], 1)
        }
          , r = []
    },
    3740: function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("63eb")
          , a = i("228e");
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        i("76d0");
        var o, c = i("f0c5"), s = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "c1ad3c90", null, !1, n["a"], o);
        t["default"] = s.exports
    },
    "40b6": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("30a50")
          , a = i("944a4");
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        i("2def");
        var o, c = i("f0c5"), s = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "088a0d90", null, !1, n["a"], o);
        t["default"] = s.exports
    },
    "414e": function(e, t, i) {
        var n = i("d89d");
        "string" === typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        var a = i("4f06").default;
        a("49000986", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "42b3": function(e, t, i) {
        var n = i("24fb");
        t = n(!1),
        t.push([e.i, ".container[data-v-c1ad3c90]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.container .modal-box[data-v-c1ad3c90]{width:%?610?%;border-radius:%?16?%}.container .modal-box .modal-header[data-v-c1ad3c90]{height:%?372?%;background:#fff;border-radius:%?16?% %?16?% %?0?% %?0?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.container .modal-box .modal-footer[data-v-c1ad3c90]{height:%?148?%;background:-webkit-linear-gradient(176deg,#2e9aff 3%,#007ff2 97%);background:linear-gradient(274deg,#2e9aff 3%,#007ff2 97%);border-radius:%?0?% %?0?% %?16?% %?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?30?%;font-weight:400;color:#fff}.container .modal-box .modal-img[data-v-c1ad3c90]{width:%?320?%;height:%?320?%}.container .close[data-v-c1ad3c90]{margin-top:%?42?%;width:%?42?%;height:%?42?%;opacity:.5}", ""]),
        e.exports = t
    },
    "489c": function(e, t, i) {
        "use strict";
        var n = i("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        i("96cf"),
        i("4de4"),
        i("4160"),
        i("159b"),
        i("a9e3"),
        i("b680"),
        i("7db0"),
        i("99af");
        var a = n(i("1da1"))
          , r = n(i("5530"))
          , o = i("2c82")
          , c = i("2f62")
          , s = i("d8a9")
          , d = n(i("f95b"))
          , u = n(i("4b6e"))
          , l = i("2478")
          , p = i("f1ed")
          , f = n(i("40b6"))
          , v = n(i("3740"))
          , g = n(i("b46d"))
          , h = n(i("efe6"))
          , b = {
            name: "VipService",
            mixins: [d.default, u.default],
            components: {
                VipPrivilege: f.default,
                ContactModal: v.default,
                BindPhoneView: g.default,
                SetAratarNickNameModal: h.default
            },
            props: {},
            data: function() {
                return {
                    VIP_CARD_TYPE_ENUM: s.VIP_CARD_TYPE_ENUM,
                    vipCardList: [],
                    experienceRegisterCard: {},
                    experienceShareCard: {},
                    selectedVipCard: null,
                    checkedProtocol: !1,
                    userVipInfo: {},
                    data: {
                        eventName: "click_membership_services_membership_service_agreement",
                        typeName: "点击-会员服务-会员服务协议"
                    },
                    vipButtonData: {
                        eventName: "click_membership_service_open_membership_card_button",
                        typeName: "点击-会员服务-开通会员卡按钮",
                        vipId: "",
                        vipName: "",
                        orderReference: "",
                        paymentStatus: ""
                    },
                    membershipCardProjectData: {
                        eventName: "click_on_membership_service_membership_card_project",
                        typeName: "点击-会员服务-会员卡项目",
                        vipId: "",
                        vipName: ""
                    }
                }
            },
            computed: (0,
            r.default)((0,
            r.default)({}, (0,
            c.mapGetters)(["userInfo", "categoryObj", "companyObj", "wxUserInfo"])), {}, {
                vipExpireTime: function() {
                    return this.userVipInfo.vipFlag ? "".concat(this.dateFormat(this.userVipInfo.expireTime), "VIP会员到期") : this.userVipInfo.vipFlag ? void 0 : this.userVipInfo.expireFlag ? "VIP会员到期" : "您还不是VIP会员"
                }
            }),
            watch: {
                checkedProtocol: function(e) {
                    e && this.buriedPointClick(this.data)
                }
            },
            filters: {},
            onLoad: function() {
                this.getUserVipInfo(),
                this.queryVipCard()
            },
            onShow: function() {
                this.$store.dispatch("getWxUserInfo");
                var e = this.$route.query.orderId;
                e && this.searchWechatResult()
            },
            onReady: function() {},
            onHide: function() {},
            onUnload: function() {},
            methods: {
                queryVipCard: function() {
                    var e = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function t() {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    uni.showLoading({
                                        title: "加载中",
                                        mask: !0
                                    }),
                                    t.next = 4,
                                    e.queryAllVipCard();
                                case 4:
                                    i = t.sent,
                                    e.vipCardList = [],
                                    e.vipCardList = i.filter((function(e) {
                                        return e.cardType === s.VIP_CARD_TYPE_ENUM.SALE_CARD.value
                                    }
                                    )) || [],
                                    e.vipCardList.forEach((function(t) {
                                        t.durationStr = t.duration + e.$enum.getDescByValue("VIP_CARD_DURATION_TYPE_ENUM", t.durationType),
                                        t.crossPrice && (t.discount = Number((t.sellPrice / t.crossPrice * 10).toFixed(2)) + "折")
                                    }
                                    )),
                                    e.$lodash.isEmpty(e.vipCardList) || e.selectVipCard(e.vipCardList[0]),
                                    e.experienceRegisterCard = i.find((function(e) {
                                        return e.cardType === s.VIP_CARD_TYPE_ENUM.EXPERIENCE_REGISTER.value
                                    }
                                    )) || {},
                                    e.experienceShareCard = i.find((function(e) {
                                        return e.cardType === s.VIP_CARD_TYPE_ENUM.EXPERIENCE_SHARE.value
                                    }
                                    )) || {},
                                    t.next = 17;
                                    break;
                                case 13:
                                    t.prev = 13,
                                    t.t0 = t["catch"](0),
                                    console.log(t.t0),
                                    e.$smartSentry.captureException(t.t0);
                                case 17:
                                    return t.prev = 17,
                                    uni.hideLoading(),
                                    t.finish(17);
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 13, 17, 20]])
                    }
                    )))()
                },
                toCashPage: function() {
                    uni.navigateTo({
                        url: "/pages-sub-center/vip/cash/index"
                    })
                },
                selectVipCard: function(e) {
                    console.log(e),
                    this.membershipCardProjectData.vipId = e.vipCardId,
                    this.membershipCardProjectData.vipName = e.cardName,
                    this.vipButtonData.vipId = e.vipCardId,
                    this.vipButtonData.vipName = e.cardName,
                    this.buriedPointClick(this.membershipCardProjectData),
                    this.selectedVipCard = this.$lodash.cloneDeep(e);
                    var t = Number((e.sellPrice / e.duration).toFixed(2));
                    if (this.selectedVipCard.unitPrice = "".concat(t, "元/").concat(this.$enum.getDescByValue("VIP_CARD_DURATION_TYPE_ENUM", e.durationType)),
                    e.crossPrice) {
                        var i = Number((e.crossPrice - e.sellPrice).toFixed(2));
                        this.selectedVipCard.priceDiff = "".concat(i, "元")
                    }
                },
                onCancelBindPhone: function() {
                    uni.showModal({
                        title: "提示",
                        content: "您已拒绝授权，将无法开通会员，请重新点击并授权",
                        showCancel: !1
                    })
                },
                buyVip: function() {
                    this.$lodash.isEmpty(this.selectedVipCard) ? this.$u.toast("请选择会员卡") : (0,
                    p.isIosProject)() ? this.$refs.contactModal.show() : this.checkedProtocol ? this.createVipOrder() : this.$u.toast("请勾选《会员服务协议》")
                },
                createVipOrder: function() {
                    var e = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function t() {
                        var i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return uni.showLoading({
                                        title: "加载中",
                                        mask: !0
                                    }),
                                    t.prev = 1,
                                    i = {
                                        buyChannelType: l.ORDER_BUY_CHANNEL_TYPE_ENUM.WX_MP_ZHI_KAO_DA_XUE.value,
                                        vipCardId: e.selectedVipCard.vipCardId,
                                        terminalType: l.TERMINAL_APP_TYPE_ENUM.H5_ZHI_KAO_DA_XUE.value,
                                        openId: e.wxUserInfo.openId,
                                        inWxFlag: (0,
                                        p.isWeixin)()
                                    },
                                    t.next = 5,
                                    o.vipOrderApi.createVipOrder(i);
                                case 5:
                                    n = t.sent,
                                    e.vipButtonData.orderReference = n.businessId,
                                    e.vipStartWeChat(n),
                                    t.next = 14;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t["catch"](1),
                                    console.log(t.t0),
                                    e.$smartSentry.captureException(t.t0);
                                case 14:
                                    uni.hideLoading();
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 10]])
                    }
                    )))()
                },
                paymentSuccess: function() {
                    var e = this;
                    uni.showLoading({
                        title: "支付处理中",
                        mask: !0
                    }),
                    setTimeout((function() {
                        uni.hideLoading(),
                        e.$u.toast("支付成功"),
                        e.getUserVipInfo(),
                        e.userInfo.completeAvatarNameFlag || e.$refs.setAratarNickNameRef.showModal()
                    }
                    ), 1e3),
                    this.vipButtonData.paymentStatus = "已支付",
                    this.buriedPointClick(this.vipButtonData)
                },
                paymentFailConfirm: function() {
                    this.getUserVipInfo()
                },
                paymentFailCancel: function() {
                    this.vipButtonData.paymentStatus = "未支付",
                    this.buriedPointClick(this.vipButtonData),
                    console.log("2"),
                    this.getUserVipInfo()
                },
                openProtocol: function() {
                    uni.navigateTo({
                        url: "/pages-sub-other/protocol/vip-protocol"
                    })
                },
                goRecord: function() {
                    (this.userVipInfo.vipFlag || this.userVipInfo.expireFlag) && uni.navigateTo({
                        url: "/pages-sub-center/vip/record/index"
                    })
                },
                goNewcomerGiftDetail: function() {
                    uni.navigateTo({
                        url: "/pages-sub-activity/vip/newcomer-gift/index"
                    })
                },
                goShareActivityDetail: function() {
                    uni.navigateTo({
                        url: "/pages-sub-activity/vip/share-get-vip/index"
                    })
                }
            }
        };
        t.default = b
    },
    "4b6e": function(e, t, i) {
        "use strict";
        var n = i("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        i("99af"),
        i("96cf");
        var a = n(i("1da1"))
          , r = i("2478")
          , o = i("f1ed")
          , c = i("a06f")
          , s = i("1e04")
          , d = {
            data: function() {
                return {}
            },
            methods: {
                startWeChat: function(e, t) {
                    var i = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function n() {
                        var a, s;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                case 0:
                                    return i,
                                    a = {
                                        orderId: e,
                                        openId: t,
                                        terminalType: r.TERMINAL_APP_TYPE_ENUM.H5_ZHI_KAO_DA_XUE.value,
                                        inWxFlag: (0,
                                        o.isWeixin)()
                                    },
                                    n.next = 4,
                                    c.payApi.getWechatPayParams(a);
                                case 4:
                                    s = n.sent,
                                    i.h5WxPayBrowserJudge(s);
                                case 6:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                vipStartWeChat: function(e) {
                    this.h5WxPayBrowserJudge(e)
                },
                h5WxPayBrowserJudge: function(e) {
                    var t = this;
                    if ((0,
                    o.isWeixin)())
                        "undefined" === typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", onBridgeReady, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", onBridgeReady),
                        document.attachEvent("onWeixinJSBridgeReady", onBridgeReady)) : t.onBridgeReady(e);
                    else {
                        var i = encodeURIComponent("".concat(window.location.href, "&recordId=").concat(e.recordId, "&orderId=").concat(orderId));
                        window.location.href = "".concat(e.wapUrl, "&redirect_url=").concat(i)
                    }
                },
                onBridgeReady: function(e) {
                    WeixinJSBridge.invoke("getBrandWCPayRequest", {
                        appId: "wxe81607802ba1c3d8",
                        timeStamp: e.payData.timeStamp,
                        nonceStr: e.payData.nonceStr,
                        package: e.payData.package,
                        signType: e.payData.signType,
                        paySign: e.payData.paySign
                    }, (function(e) {
                        var t = this;
                        "get_brand_wcpay_request:ok" === e.err_msg ? (console.log("支付成功"),
                        this.paymentSuccess()) : "get_brand_wcpay_request:cancel" === e.err_msg ? uni.showModal({
                            title: "提示",
                            content: "是否放弃支付",
                            cancelText: "放弃支付",
                            confirmText: "继续支付",
                            success: function(e) {
                                e.confirm && t.paymentFailConfirm(),
                                e.cancel && t.paymentFailCancel()
                            }
                        }) : "get_brand_wcpay_request:fail" === e.err_msg && uni.showToast({
                            icon: "none",
                            title: "抱歉，您的支付未完成"
                        })
                    }
                    ))
                },
                searchWechatResult: function() {
                    var e = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function t() {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    (0,
                                    s.getPayResult)((0,
                                    o.getUrlKey)("recordId"));
                                case 2:
                                    i = t.sent,
                                    i ? (console.log("支付成功"),
                                    e.paymentSuccess()) : uni.showToast({
                                        icon: "none",
                                        title: "抱歉，您的支付未完成"
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                mpWechatPayment: function(e) {
                    var t = this;
                    uni.requestPayment({
                        provider: "wxpay",
                        timeStamp: e.timeStamp,
                        nonceStr: e.nonceStr,
                        package: e.package,
                        signType: e.signType,
                        paySign: e.paySign,
                        success: function() {
                            console.log("支付成功"),
                            t.paymentSuccess()
                        },
                        fail: function(e) {
                            "requestPayment:fail cancel" === e.errMsg ? uni.showModal({
                                title: "提示",
                                content: "是否放弃支付",
                                cancelText: "放弃支付",
                                confirmText: "继续支付",
                                success: function(e) {
                                    e.confirm && t.paymentFailConfirm(),
                                    e.cancel && t.paymentFailCancel()
                                }
                            }) : uni.showModal({
                                title: "提示",
                                content: "支付失败，请重试",
                                showCancel: !1
                            })
                        }
                    })
                },
                paymentSuccess: function() {
                    console.log("支付成功---"),
                    this.$u.toast("支付成功")
                },
                paymentFailConfirm: function() {
                    console.log("支付成功---1")
                },
                paymentFailCancel: function() {
                    console.log("支付成功---2")
                }
            }
        };
        t.default = d
    },
    "507d": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("2a27")
          , a = i("91fa");
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        i("f8de");
        var o, c = i("f0c5"), s = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "f9444432", null, !1, n["a"], o);
        t["default"] = s.exports
    },
    "57ee": function(e, t, i) {
        var n = i("42b3");
        "string" === typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        var a = i("4f06").default;
        a("2c47ee83", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "63eb": function(e, t, i) {
        "use strict";
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "c", (function() {
            return r
        }
        )),
        i.d(t, "a", (function() {
            return n
        }
        ));
        var n = {
            uPopup: i("3626").default
        }
          , a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("u-popup", {
                attrs: {
                    mode: "center",
                    transparentBg: !0,
                    maskCustomStyle: e.popupMaskStyle
                },
                model: {
                    value: e.showFlag,
                    callback: function(t) {
                        e.showFlag = t
                    },
                    expression: "showFlag"
                }
            }, [i("v-uni-view", {
                staticClass: "container"
            }, [i("v-uni-view", {
                staticClass: "modal-box"
            }, [i("v-uni-view", {
                staticClass: "modal-header"
            }, [i("v-uni-image", {
                staticClass: "modal-img",
                attrs: {
                    src: e.imgUrl,
                    "show-menu-by-longpress": !0
                }
            })], 1), i("v-uni-view", {
                staticClass: "modal-footer"
            }, [e.isMobile ? i("v-uni-view", [e._v("截图到微信识别")]) : i("v-uni-view", [e._v("长按识别二维码")]), i("v-uni-view", [e._v("添加老师进行咨询")])], 1)], 1), i("v-uni-image", {
                staticClass: "close",
                attrs: {
                    src: e.imgPrefix + "mp/common/modal-footer-close.png"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.showFlag = !1
                    }
                }
            })], 1)], 1)
        }
          , r = []
    },
    "67bf": function(e, t, i) {
        "use strict";
        var n = i("040a")
          , a = i.n(n);
        a.a
    },
    "68cb": function(e, t, i) {
        var n = i("24fb")
          , a = i("1de5")
          , r = i("0a4e");
        t = n(!1);
        var o = a(r);
        t.push([e.i, "@font-face{font-family:DIN-Bold;src:url(" + o + ')}uni-page-body[data-v-f9444432],.wrapper[data-v-f9444432]{min-height:100%}.wrapper[data-v-f9444432]{min-height:100vh}.wrapper[data-v-f9444432]{position:relative;background:#f8f9fa}.wrapper[data-v-f9444432]::before{content:"";width:100%;height:%?368?%;background:#353535;position:absolute;left:0;top:0}.wrapper .container[data-v-f9444432]{position:relative;z-index:2;padding:%?16?% %?24?% %?100?%}.wrapper .container .user-section[data-v-f9444432]{height:%?172?%;padding:0 %?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#353535;background:-webkit-linear-gradient(331deg,#f3dec5 11%,#e8c5a3 96%);background:linear-gradient(119deg,#f3dec5 11%,#e8c5a3 96%);border-radius:%?30?%;margin-bottom:%?20?%}.wrapper .container .user-section .user-avatar[data-v-f9444432]{width:%?100?%;height:%?100?%;border:%?4?% solid #cba889;border-radius:50%;overflow:hidden}.wrapper .container .user-section .user-avatar uni-image[data-v-f9444432]{display:block;width:100%;height:100%;border-radius:50%;overflow:hidden}.wrapper .container .user-section .user-center[data-v-f9444432]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;margin:0 %?16?%}.wrapper .container .user-section .user-center .user-name[data-v-f9444432]{height:%?44?%;line-height:%?44?%;font-size:%?32?%;font-weight:800;color:#251e1b;margin-bottom:%?4?%}.wrapper .container .user-section .user-center .user-vip-desc[data-v-f9444432]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wrapper .container .user-section .user-center .user-vip-desc uni-view[data-v-f9444432]{height:%?40?%;line-height:%?40?%;font-size:%?28?%;color:#251e1b;opacity:.5}.wrapper .container .user-section .user-center .user-vip-desc uni-image[data-v-f9444432]{display:block;width:%?28?%;height:%?28?%;margin-left:%?4?%}.wrapper .container .user-section .cash-button[data-v-f9444432]{width:%?160?%;height:%?72?%;line-height:%?72?%;font-size:%?28?%;font-weight:700;color:#e7d1b5;text-align:center;background:-webkit-linear-gradient(336deg,#353535 10%,#362623 61%,#201c19 87%);background:linear-gradient(114deg,#353535 10%,#362623 61%,#201c19 87%);border-radius:%?36?%}.wrapper .container .section-item-header[data-v-f9444432]{padding-left:%?20?%;height:%?50?%;line-height:%?50?%;font-size:%?36?%;font-weight:700;color:#353535;position:relative}.wrapper .container .section-item-header[data-v-f9444432]::before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?8?%;height:%?30?%;background:#e5a465;border-radius:%?4?%}.wrapper .container .card-secton[data-v-f9444432]{padding:%?30?% %?24?%;background:#fff;border-radius:%?16?%;box-shadow:0 %?6?% %?12?% 0 rgba(68,125,254,.06);margin-bottom:%?20?%}.wrapper .container .card-secton .empty-view[data-v-f9444432]{padding:%?90?% 0 %?160?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wrapper .container .card-secton .empty-view .empty-icon[data-v-f9444432]{display:block;width:%?220?%;height:%?186?%;margin-bottom:%?22?%}.wrapper .container .card-secton .empty-view .empty-desc[data-v-f9444432]{font-size:%?30?%;color:#999}.wrapper .container .card-secton .card-list[data-v-f9444432]{padding:%?24?% 0;margin-left:%?-18?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.wrapper .container .card-secton .card-list .card-item[data-v-f9444432]{margin-left:%?20?%;width:%?204?%;height:%?236?%;padding-top:%?36?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border:%?4?% solid #ededed;border-radius:%?16?%;margin-bottom:%?20?%;position:relative}.wrapper .container .card-secton .card-list .card-item.activated[data-v-f9444432]{background:#fdebd4;border-color:#e5a465;box-shadow:0 %?6?% %?12?% 0 rgba(229,168,101,.3)}.wrapper .container .card-secton .card-list .card-item .discount[data-v-f9444432]{position:absolute;left:%?-4?%;top:%?-4?%;width:%?88?%;height:%?40?%;line-height:%?40?%;text-align:center;font-size:%?28?%;font-weight:400;color:#ffe6bf;background:-webkit-linear-gradient(left,#ff611c,#ff9100);background:linear-gradient(90deg,#ff611c,#ff9100);border-radius:%?16?% 0 %?16?% 0}.wrapper .container .card-secton .card-list .card-item .price[data-v-f9444432]{height:%?68?%;line-height:%?68?%;font-size:%?56?%;font-family:DIN-Bold;font-weight:700;color:#6e4008}.wrapper .container .card-secton .card-list .card-item .price uni-text[data-v-f9444432]{font-size:%?40?%}.wrapper .container .card-secton .card-list .card-item .duration[data-v-f9444432]{height:%?42?%;line-height:%?42?%;font-size:%?30?%;color:#6e4008;margin-bottom:%?8?%}.wrapper .container .card-secton .card-list .card-item .cross-price[data-v-f9444432]{height:%?40?%;line-height:%?40?%;font-size:%?28?%;color:#999;text-decoration:line-through}.wrapper .container .card-secton .buy-button[data-v-f9444432]{position:relative;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?36?%;font-weight:700;color:#ffe6bf;background:-webkit-linear-gradient(336deg,#3a1b00 10%,#362623 60%,#201c19 87%);background:linear-gradient(114deg,#3a1b00 10%,#362623 60%,#201c19 87%);box-shadow:0 %?6?% %?12?% 0 rgba(101,78,72,.36);border-radius:%?50?%;margin-bottom:%?24?%}.wrapper .container .card-secton .buy-button.renew[data-v-f9444432]{color:#fff;background:-webkit-linear-gradient(336deg,#ff611c 10%,#ff9100 87%);background:linear-gradient(114deg,#ff611c 10%,#ff9100 87%);box-shadow:0 %?6?% %?12?% 0 rgba(233,199,166,.3)}.wrapper .container .card-secton .buy-button .pop-tip[data-v-f9444432]{position:absolute;top:%?-20?%;left:%?340?%;height:%?42?%;line-height:%?42?%;font-size:%?24?%;font-weight:400;color:#6e4008;padding-left:%?18?%;padding-right:%?16?%;background:-webkit-linear-gradient(14deg,#f3dec5 9%,#e8c5a3 88%);background:linear-gradient(76deg,#f3dec5 9%,#e8c5a3 88%);border-radius:%?18?% %?18?% %?18?% 0}.wrapper .container .card-secton .buy-button .pop-tip uni-text[data-v-f9444432]{padding-left:%?8?%}.wrapper .container .card-secton .buy-button uni-button[data-v-f9444432]{position:absolute;left:0;top:0;z-index:2;width:100%;height:100%;opacity:0}.wrapper .container .card-secton .protocol[data-v-f9444432]{display:inline-block;padding-left:%?34?%;height:%?34?%;line-height:%?34?%;font-size:%?24?%;color:#353535;background:url(https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/checke-26x26.png) 0 no-repeat;background-size:%?26?%}.wrapper .container .card-secton .protocol.active[data-v-f9444432]{background-image:url(https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/checke-active-26x26.png)}.wrapper .container .card-secton .protocol uni-text[data-v-f9444432]{color:#6e4008}.wrapper .container .privilege-section[data-v-f9444432]{padding:%?30?% %?24?%;background:#fff;border-radius:%?16?%;box-shadow:0 %?6?% %?12?% 0 rgba(68,125,254,.06);margin-bottom:%?20?%}.wrapper .container .privilege-section .privilege-list[data-v-f9444432]{margin-left:%?-24?%;margin-right:%?-24?%;padding:%?24?% 0 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.wrapper .container .privilege-section .privilege-list .privilege-item[data-v-f9444432]{width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?36?%}.wrapper .container .privilege-section .privilege-list .privilege-item .icon[data-v-f9444432]{display:block;width:%?88?%;height:%?88?%;margin-bottom:%?12?%}.wrapper .container .privilege-section .privilege-list .privilege-item .title[data-v-f9444432]{height:%?40?%;line-height:%?40?%;font-size:%?28?%;color:#353535;margin-bottom:%?2?%}.wrapper .container .privilege-section .privilege-list .privilege-item .desc[data-v-f9444432]{height:%?34?%;line-height:%?34?%;font-size:%?24?%;font-weight:400;color:#999}.wrapper .container .privilege-section .privilege-more[data-v-f9444432]{height:%?40?%;line-height:%?40?%;font-weight:400;text-align:center;color:#ccc}.wrapper .container .activities-section[data-v-f9444432]{padding:%?30?% %?24?%;background:#fff;border-radius:%?16?%;box-shadow:0 %?6?% %?12?% 0 rgba(68,125,254,.06)}.wrapper .container .activities-section .activities-content[data-v-f9444432]{padding-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wrapper .container .activities-section .activities-content uni-image[data-v-f9444432]{display:block;width:%?316?%;height:%?164?%}', ""]),
        e.exports = t
    },
    "6d30": function(e, t, i) {
        var n = i("afce");
        "string" === typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        var a = i("4f06").default;
        a("0e96c5a7", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "76d0": function(e, t, i) {
        "use strict";
        var n = i("57ee")
          , a = i.n(n);
        a.a
    },
    8156: function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("b2e6")
          , a = i.n(n);
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return n[e]
                }
                ))
            }(r);
        t["default"] = a.a
    },
    "857b": function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = {
            name: "SetAratarNickNameModal",
            components: {},
            props: {},
            data: function() {
                return {
                    isShowModal: !1,
                    row1Desc: "为了更好的提供学习服务",
                    row2Desc: "请先设置头像和昵称"
                }
            },
            computed: {},
            watch: {},
            filters: {},
            created: function() {},
            mounted: function() {
                var e = this;
                uni.$on("setAvatarNameSuccess", (function() {
                    e.closeModal()
                }
                ))
            },
            beforeDestroy: function() {
                uni.$off("setAvatarNameSuccess")
            },
            methods: {
                showModal: function(e, t) {
                    e && (this.row1Desc = e),
                    t && (this.row2Desc = t),
                    this.isShowModal = !0
                },
                closeModal: function() {
                    this.isShowModal = !1
                },
                toSet: function() {
                    uni.navigateTo({
                        url: "/pages-sub-center/user-info/set-nickName-avatar"
                    })
                },
                onClose: function() {
                    this.$emit("onCancel"),
                    this.closeModal()
                }
            }
        };
        t.default = n
    },
    "8b79": function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = i("f1ed")
          , a = {
            props: {
                imgUrl: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    showFlag: !1
                }
            },
            computed: {
                isMobile: function() {
                    return (0,
                    n.isMobileWebView)()
                }
            },
            methods: {
                show: function() {
                    this.showFlag = !0
                }
            }
        };
        t.default = a
    },
    "91fa": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("489c")
          , a = i.n(n);
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return n[e]
                }
                ))
            }(r);
        t["default"] = a.a
    },
    "944a4": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("9898")
          , a = i.n(n);
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return n[e]
                }
                ))
            }(r);
        t["default"] = a.a
    },
    9898: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = {
            name: "VipPrivilege",
            data: function() {
                return {
                    privilegeList: [{
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-1.png",
                        title: "章节真题",
                        desc: "掌握必考点"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-2.png",
                        title: "年份真题",
                        desc: "直击考场"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-3.png",
                        title: "考点视频",
                        desc: "观看视频"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-4.png",
                        title: "必练子题",
                        desc: "巩固提高"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-5.png",
                        title: "组队刷题",
                        desc: "一起学习"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-6.png",
                        title: "我的题库",
                        desc: "一键上传"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-7.png",
                        title: "合并题库",
                        desc: "刷题更高效"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-8.png",
                        title: "极速备考",
                        desc: "高效复习"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-9.png",
                        title: "题库报告",
                        desc: "考点统计"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-10.png",
                        title: "评论特权",
                        desc: "题库评论"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-11.png",
                        title: "做题报告",
                        desc: "统计做题"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-12.png",
                        title: "学习分析",
                        desc: "预测得分"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-13.png",
                        title: "10000+题",
                        desc: "题库更新"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-14.png",
                        title: "1V1在线答疑",
                        desc: "专属备考官"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-15.png",
                        title: "赠送会员",
                        desc: "亲友共享"
                    }, {
                        icon: "https://zhikaodaxue-prod.oss-cn-qingdao.aliyuncs.com/mp/v2/vip-buy/privilege-16.png",
                        title: "身份标识",
                        desc: "尊享会员"
                    }]
                }
            },
            created: function() {},
            methods: {}
        };
        t.default = n
    },
    a06f: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.payApi = void 0;
        var n = i("1e04")
          , a = {
            getWechatPayParams: function(e) {
                return (0,
                n.postHttp)("/app/order/pay/query/wx", e)
            },
            getPayResult: function(e) {
                return (0,
                n.getHttp)("/pay/wx/result/".concat(e))
            }
        };
        t.payApi = a
    },
    afce: function(e, t, i) {
        var n = i("24fb");
        t = n(!1),
        t.push([e.i, '.privilege-section[data-v-088a0d90]{padding:%?30?% %?24?%;background:#fff;border-radius:%?16?%;box-shadow:0 %?6?% %?12?% 0 rgba(68,125,254,.06);margin-bottom:%?20?%;overflow:hidden}.privilege-section .privilege-header[data-v-088a0d90]{padding-left:%?20?%;height:%?50?%;line-height:%?50?%;font-size:%?36?%;font-weight:700;color:#353535;position:relative}.privilege-section .privilege-header[data-v-088a0d90]::before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?8?%;height:%?30?%;background:#e5a465;border-radius:%?4?%}.privilege-section .privilege-list[data-v-088a0d90]{margin-left:%?-24?%;margin-right:%?-24?%;padding:%?24?% 0 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.privilege-section .privilege-list .privilege-item[data-v-088a0d90]{width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?36?%}.privilege-section .privilege-list .privilege-item .icon[data-v-088a0d90]{display:block;width:%?88?%;height:%?88?%;margin-bottom:%?12?%}.privilege-section .privilege-list .privilege-item .title[data-v-088a0d90]{height:%?40?%;line-height:%?40?%;font-size:%?28?%;color:#353535;margin-bottom:%?2?%}.privilege-section .privilege-list .privilege-item .desc[data-v-088a0d90]{height:%?34?%;line-height:%?34?%;font-size:%?24?%;font-weight:400;color:#999}.privilege-section .privilege-more[data-v-088a0d90]{height:%?40?%;line-height:%?40?%;font-weight:400;text-align:center;color:#ccc}', ""]),
        e.exports = t
    },
    b2e6: function(e, t, i) {
        "use strict";
        var n = i("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        i("96cf");
        var a = n(i("1da1"))
          , r = i("2345")
          , o = n(i("0be6"))
          , c = {
            name: "BindPhoneView",
            components: {},
            props: {},
            data: function() {
                return {}
            },
            computed: {},
            watch: {},
            filters: {},
            created: function() {},
            mounted: function() {},
            beforeCreate: function() {},
            beforeMount: function() {},
            beforeUpdate: function() {},
            updated: function() {},
            beforeDestroy: function() {},
            destroyed: function() {},
            activated: function() {},
            methods: {
                getPhoneNumber: function(e) {
                    var t = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function i() {
                        var n, a, o, c;
                        return regeneratorRuntime.wrap((function(i) {
                            while (1)
                                switch (i.prev = i.next) {
                                case 0:
                                    if (i.prev = 0,
                                    uni.showLoading({
                                        title: "加载中"
                                    }),
                                    "getPhoneNumber:ok" !== e.detail.errMsg) {
                                        i.next = 13;
                                        break
                                    }
                                    return n = e.detail.code,
                                    a = {
                                        code: n,
                                        wxAppAccount: "100"
                                    },
                                    i.next = 7,
                                    r.thirdApi.updatePhoneV2(a);
                                case 7:
                                    return o = i.sent,
                                    c = {
                                        phone: o,
                                        bindPhoneFlag: !0
                                    },
                                    t.updateStorageData(c),
                                    uni.showToast({
                                        title: "保存成功",
                                        mask: !0
                                    }),
                                    setTimeout((function() {
                                        t.$emit("onSuccess")
                                    }
                                    ), 800),
                                    i.abrupt("return");
                                case 13:
                                    uni.hideLoading(),
                                    t.$emit("onCancel"),
                                    i.next = 20;
                                    break;
                                case 17:
                                    i.prev = 17,
                                    i.t0 = i["catch"](0),
                                    t.$smartSentry.captureException(i.t0);
                                case 20:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, null, [[0, 17]])
                    }
                    )))()
                },
                updateStorageData: function(e) {
                    var t = uni.getStorageSync(o.default.USER_INFO_STORAGE_KEY)
                      , i = Object.assign(t, e);
                    this.$store.commit("setUserInfo", i)
                },
                toH5BindPhone: function() {
                    uni.navigateTo({
                        url: "/pages-sub-center/user-info/change-phone"
                    })
                }
            }
        };
        t.default = c
    },
    b46d: function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("fad6")
          , a = i("8156");
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        i("67bf");
        var o, c = i("f0c5"), s = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "3dae1263", null, !1, n["a"], o);
        t["default"] = s.exports
    },
    b6e4: function(e, t, i) {
        "use strict";
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "c", (function() {
            return r
        }
        )),
        i.d(t, "a", (function() {
            return n
        }
        ));
        var n = {
            uPopup: i("3626").default
        }
          , a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("u-popup", {
                attrs: {
                    mode: "center",
                    zoom: !1,
                    "mask-close-able": !1,
                    transparentBg: !0
                },
                model: {
                    value: e.isShowModal,
                    callback: function(t) {
                        e.isShowModal = t
                    },
                    expression: "isShowModal"
                }
            }, [i("v-uni-view", {
                staticClass: "modal-wrapper"
            }, [i("v-uni-view", {
                staticClass: "modal-container"
            }, [i("v-uni-view", {
                staticClass: "modal-desc"
            }, [e._v(e._s(e.row1Desc))]), i("v-uni-view", {
                staticClass: "modal-desc"
            }, [e._v(e._s(e.row2Desc))]), i("v-uni-view", {
                staticClass: "modal-button",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.toSet.apply(void 0, arguments)
                    }
                }
            }, [e._v("去设置")])], 1)], 1)], 1)
        }
          , r = []
    },
    b7bf: function(e, t, i) {
        var n = i("24fb");
        t = n(!1),
        t.push([e.i, ".bind-phone-view[data-v-3dae1263]{position:absolute;left:0;top:0;z-index:2;opacity:0;width:100%;height:100%}.bind-phone-view uni-button[data-v-3dae1263]{width:100%;height:100%;opacity:0}", ""]),
        e.exports = t
    },
    bf24: function(e, t, i) {
        "use strict";
        var n = i("414e")
          , a = i.n(n);
        a.a
    },
    c8cf: function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("857b")
          , a = i.n(n);
        for (var r in n)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return n[e]
                }
                ))
            }(r);
        t["default"] = a.a
    },
    d89d: function(e, t, i) {
        var n = i("24fb");
        t = n(!1),
        t.push([e.i, ".modal-wrapper[data-v-6e794cc8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.modal-wrapper .modal-container[data-v-6e794cc8]{width:%?580?%;height:%?396?%;padding:%?82?% %?40?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#f1f1f1;border-radius:%?16?%;box-shadow:0 %?6?% %?12?% 0 rgba(68,125,254,.06)}.modal-wrapper .modal-container .modal-desc[data-v-6e794cc8]{line-height:1.46;font-size:%?38?%;font-weight:700;text-align:center;color:#353535}.modal-wrapper .modal-container .modal-button[data-v-6e794cc8]{margin-top:%?64?%;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?30?%;font-weight:700;color:#fff;border-radius:%?40?%;background:-webkit-linear-gradient(353deg,#27b5ff 6%,#318cfe 95%);background:linear-gradient(97deg,#27b5ff 6%,#318cfe 95%);border-radius:%?40?%}", ""]),
        e.exports = t
    },
    efe6: function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("b6e4")
          , a = i("c8cf");
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        i("bf24");
        var o, c = i("f0c5"), s = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "6e794cc8", null, !1, n["a"], o);
        t["default"] = s.exports
    },
    f8de: function(e, t, i) {
        "use strict";
        var n = i("fdd1")
          , a = i.n(n);
        a.a
    },
    f95b: function(e, t, i) {
        "use strict";
        var n = i("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        i("5319"),
        i("ac1f"),
        i("4d90"),
        i("99af"),
        i("d3b7"),
        i("96cf");
        var a = n(i("1da1"))
          , r = n(i("5530"))
          , o = i("546f")
          , c = i("d8a9")
          , s = i("4ca8")
          , d = i("2f62")
          , u = {
            data: function() {
                return {
                    userVipInfo: {}
                }
            },
            computed: (0,
            r.default)((0,
            r.default)({}, (0,
            d.mapGetters)(["userInfo", "categoryObj", "companyObj"])), {}, {
                expireVip: function() {
                    return this.userVipInfo && !this.userVipInfo.vipFlag && this.userVipInfo.expireFlag
                },
                boughtFlag: function() {
                    return this.userVipInfo && (this.userVipInfo.vipFlag || this.expireVip)
                }
            }),
            methods: {
                getUserVipInfo: function() {
                    var e = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function t() {
                        var i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    !e.$lodash.isEmpty(e.userInfo)) {
                                        t.next = 4;
                                        break
                                    }
                                    return e.userVipInfo = {},
                                    t.abrupt("return");
                                case 4:
                                    return t.next = 6,
                                    e.$store.dispatch("checkCategoryAndCompany", !1);
                                case 6:
                                    if (i = t.sent,
                                    i) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 9:
                                    return t.next = 11,
                                    s.vipRecordApi.getUserVipInfo(e.categoryObj.categoryId, e.companyObj.companyId);
                                case 11:
                                    n = t.sent,
                                    e.userVipInfo = n,
                                    t.next = 19;
                                    break;
                                case 15:
                                    t.prev = 15,
                                    t.t0 = t["catch"](0),
                                    console.log(t.t0),
                                    e.$smartSentry.captureException(t.t0);
                                case 19:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 15]])
                    }
                    )))()
                },
                dateFormat: function(e) {
                    if (!e)
                        return "";
                    e = e.replace(/-/g, "/");
                    var t = new Date(e)
                      , i = t.getFullYear()
                      , n = this.$lodash.padStart(t.getMonth() + 1, 2, "0")
                      , a = this.$lodash.padStart(t.getDate(), 2, "0");
                    return "".concat(i, "年").concat(n, "月").concat(a, "日")
                },
                queryAllVipCard: function() {
                    var e = this;
                    return new Promise(function() {
                        var t = (0,
                        a.default)(regeneratorRuntime.mark((function t(i, n) {
                            var a;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return uni.showLoading({
                                            title: "加载中",
                                            mask: !0
                                        }),
                                        t.prev = 1,
                                        t.next = 4,
                                        o.vipCardApi.queryVipCard({
                                            categoryId: e.categoryObj.categoryId,
                                            companyId: e.companyObj.companyId
                                        });
                                    case 4:
                                        a = t.sent,
                                        i(a),
                                        t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8,
                                        t.t0 = t["catch"](1),
                                        n(t.t0);
                                    case 11:
                                        uni.hideLoading();
                                    case 12:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[1, 8]])
                        }
                        )));
                        return function(e, i) {
                            return t.apply(this, arguments)
                        }
                    }())
                },
                queryExperienceRegisterVipCard: function() {
                    var e = this;
                    return new Promise(function() {
                        var t = (0,
                        a.default)(regeneratorRuntime.mark((function t(i, n) {
                            var a;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return uni.showLoading({
                                            title: "加载中",
                                            mask: !0
                                        }),
                                        t.prev = 1,
                                        t.next = 4,
                                        o.vipCardApi.queryVipCard({
                                            categoryId: e.categoryObj.categoryId,
                                            companyId: e.companyObj.companyId,
                                            cardType: c.VIP_CARD_TYPE_ENUM.EXPERIENCE_REGISTER.value
                                        });
                                    case 4:
                                        a = t.sent,
                                        i(a),
                                        t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8,
                                        t.t0 = t["catch"](1),
                                        n(t.t0);
                                    case 11:
                                        uni.hideLoading();
                                    case 12:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[1, 8]])
                        }
                        )));
                        return function(e, i) {
                            return t.apply(this, arguments)
                        }
                    }())
                },
                queryExperienceShareVipCard: function() {
                    var e = this;
                    return new Promise(function() {
                        var t = (0,
                        a.default)(regeneratorRuntime.mark((function t(i, n) {
                            var a;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return uni.showLoading({
                                            title: "加载中",
                                            mask: !0
                                        }),
                                        t.prev = 1,
                                        t.next = 4,
                                        o.vipCardApi.queryVipCard({
                                            categoryId: e.categoryObj.categoryId,
                                            companyId: e.companyObj.companyId,
                                            cardType: c.VIP_CARD_TYPE_ENUM.EXPERIENCE_SHARE.value
                                        });
                                    case 4:
                                        a = t.sent,
                                        i(a),
                                        t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8,
                                        t.t0 = t["catch"](1),
                                        n(t.t0);
                                    case 11:
                                        uni.hideLoading();
                                    case 12:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[1, 8]])
                        }
                        )));
                        return function(e, i) {
                            return t.apply(this, arguments)
                        }
                    }())
                },
                queryExamPointSpecializeVipCard: function() {
                    var e = this;
                    return new Promise(function() {
                        var t = (0,
                        a.default)(regeneratorRuntime.mark((function t(i, n) {
                            var a;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                        t.next = 3,
                                        o.vipCardApi.queryVipCard({
                                            categoryId: e.categoryObj.categoryId,
                                            companyId: e.companyObj.companyId,
                                            cardType: c.VIP_CARD_TYPE_ENUM.EXAM_POINT_SPECIALIZE.value
                                        });
                                    case 3:
                                        a = t.sent,
                                        i(a),
                                        t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7,
                                        t.t0 = t["catch"](0),
                                        n(t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[0, 7]])
                        }
                        )));
                        return function(e, i) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }
        };
        t.default = u
    },
    fad6: function(e, t, i) {
        "use strict";
        var n;
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "c", (function() {
            return r
        }
        )),
        i.d(t, "a", (function() {
            return n
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "bind-phone-view"
            }, [i("v-uni-button", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.toH5BindPhone.apply(void 0, arguments)
                    }
                }
            }, [e._v("APP/H5完善手机号")])], 1)
        }
          , r = []
    },
    fdd1: function(e, t, i) {
        var n = i("68cb");
        "string" === typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        var a = i("4f06").default;
        a("12216541", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }
}]);
