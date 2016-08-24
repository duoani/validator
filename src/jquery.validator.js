/**
 * Created by duo on 2016/8/24.
 */
!(function($) {
    $.extend($.fn, {
        validate: function(b) {
            if (this.length) {
                var e = $.data(this[0], "validator");
                if (e){
                    return e;
                }
                this.attr("novalidate", "novalidate");
                e = new $.validator(b,this[0]);
                $.data(this[0], "validator", e);
                if(e.settings.onsubmit){
                    this.validateDelegate(":submit", "click", function(a) {
                        e.settings.submitHandler && (e.submitButton = a.target);
                        $(a.target).hasClass("cancel") && (e.cancelSubmit = !0);
                        void 0 !== $(a.target).attr("formnovalidate") && (e.cancelSubmit = !0)
                    });
                        
                    this.submit(function(a) {
                        function b() {
                            var g;

                            if(e.settings.submitHandler){
                                if(e.submitButton){
                                    g = $("<input type='hidden'/>").attr("name", e.submitButton.name).val($(e.submitButton).val()).appendTo(e.currentForm)
                                }
                                e.settings.submitHandler.call(e, e.currentForm, a);
                                if(e.submitButton ){
                                    g.remove()
                                }
                                return false;
                            }else{
                                return true;
                            }
                        }
                        e.settings.debug && a.preventDefault();
                        if (e.cancelSubmit){
                            e.cancelSubmit = false;
                            return b();
                        }
                            
                        if (e.form()){
                            if(e.pendingRequest){
                                e.formSubmitted = true;
                                return false;
                            }else{
                                return b();
                            }
                        }
                        
                        e.focusInvalid();
                        return false
                    })
                };
                return e
            }
            if( b && b.debug && window.console ){
                console.warn("Nothing selected, can't validate, returning nothing.")
            }
        },
        valid: function() {
            if ($(this[0]).is("form")){
                return this.validate().form();
            }
            var b = true,
                e = $(this[0].form).validate();

            this.each(function() {
                b = b && e.element(this)
            });
            return b
        },
        removeAttrs: function(attrs) {
            var origin = {}, me = this;
            $.each(attrs.split(/\s/), function(b, attr) {
                origin[attr] = me.attr(attr);
                me.removeAttr(attr)
            });
            return origin
        },
        rules: function(b, e) {
            var a = this[0];
            if (b) {
                var g = $.data(a.form, "validator").settings
                    , h = g.rules
                    , m = $.validator.staticRules(a);
                switch (b) {
                    case "add":
                        $.extend(m, $.validator.normalizeRule(e));
                        delete m.messages;
                        h[a.name] = m;
                        e.messages && (g.messages[a.name] = $.extend(g.messages[a.name], e.messages));
                        break;
                    case "remove":
                        if (!e)
                            return delete h[a.name],
                                m;
                        var k = {};
                        $.each(e.split(/\s/), function(a, b) {
                            k[b] = m[b];
                            delete m[b]
                        });
                        return k
                }
            }
            a = $.validator.normalizeRules($.extend({}, $.validator.classRules(a), $.validator.attributeRules(a), $.validator.dataRules(a), $.validator.staticRules(a)), a);
            a.required && (g = a.required,
                delete a.required,
                a = $.extend({
                    required: g
                }, a));
            return a
        }
    });
    $.extend($.expr[":"], {
        blank: function(elem) {
            return !$.trim("" + $(elem).val())
        },
        filled: function(elem) {
            return !!$.trim("" + $(elem).val())
        },
        unchecked: function(elem) {
            return !$(elem).prop("checked")
        }
    });
    $.validator = function(options, formElem) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = formElem;
        this.init()
    }
    ;
    $.validator.format = function(formatter, e) {
        if (1 === arguments.length){
            return function() {
                var a = $.makeArray(arguments);
                a.unshift(formatter);
                return $.validator.format.apply(this, a)
            };
        }

        if (2 < arguments.length && e.constructor !== Array){
            e = $.makeArray(arguments).slice(1)
        }
        if (e.constructor !== Array){
            e = [e]
        }

        $.each(e, function(i, val) {
            formatter = formatter.replace(RegExp("\\{" + i + "\\}", "g"), function() {
                return val
            })
        });
        return formatter
    };

    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(b, $) {
                this.lastActive = b;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass),
                    this.addWrapper(this.errorsFor(b)).hide())
            },
            onfocusout: function(b, $) {
                this.checkable(b) || !(b.name in this.submitted) && this.optional(b) || this.element(b)
            },
            onkeyup: function(b, $) {
                (9 !== $.which || "" !== this.elementValue(b)) && (b.name in this.submitted || b === this.lastElement) && this.element(b)
            },
            onclick: function(b, $) {
                b.name in this.submitted ? this.element(b) : b.parentNode.name in this.submitted && this.element(b.parentNode)
            },
            highlight: function(b, e, a) {
                "radio" === b.type ? this.findByName(b.name).addClass(e).removeClass(a) : $(b).addClass(e).removeClass(a)
            },
            unhighlight: function(b, e, a) {
                "radio" === b.type ? this.findByName(b.name).removeClass(e).addClass(a) : $(b).removeClass(e).addClass(a)
            }
        },
        setDefaults: function(b) {
            $.extend($.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(a) {
                    var b = $.data(this[0].form, "validator")
                        , e = "on" + a.type.replace(/^validate/, "");
                    b.settings[e] && b.settings[e].call(b, this[0], a)
                }
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var e = this.groups = {};
                $.each(this.settings.groups, function(a, b) {
                    "string" === typeof b && (b = b.split(/\s/));
                    $.each(b, function(b, $) {
                        e[$] = a
                    })
                });
                var a = this.settings.rules;
                $.each(a, function(b, e) {
                    a[b] = $.validator.normalizeRule(e)
                });
                $(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b);
                this.settings.invalidHandler && $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                this.valid() || $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var b = 0, $ = this.currentElements = this.elements(); $[b]; b++)
                    this.check($[b]);
                return this.valid()
            },
            element: function(b) {
                this.lastElement = b = this.validationTargetFor(this.clean(b));
                this.prepareElement(b);
                this.currentElements = $(b);
                var e = !1 !== this.check(b);
                e ? delete this.invalid[b.name] : this.invalid[b.name] = !0;
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
                this.showErrors();
                return e
            },
            showErrors: function(b) {
                if (b) {
                    $.extend(this.errorMap, b);
                    this.errorList = [];
                    for (var e in b)
                        this.errorList.push({
                            message: b[e],
                            element: this.findByName(e)[0]
                        });
                    this.successList = $.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                $.fn.resetForm && $(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null ;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(b) {
                var $ = 0, a;
                for (a in b)
                    $++;
                return $
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === $.grep(this.errorList, function($) {
                        return $.element.name === b.name
                    }).length && b
            },
            elements: function() {
                var b = this
                    , e = {};
                return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name && (b.settings.debug && window.console) && console.error("%o has no name assigned", this);
                    return this.name in e || !b.objectLength($(this).rules()) ? !1 : e[this.name] = !0
                })
            },
            clean: function(b) {
                return $(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.replace(" ", ".");
                return $(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.currentElements = $([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(b) {
                this.reset();
                this.toHide = this.errorsFor(b)
            },
            elementValue: function(b) {
                var e = $(b).attr("type")
                    , a = $(b).val();
                return "radio" === e || "checkbox" === e ? $("input[name='" + $(b).attr("name") + "']:checked").val() : "string" === typeof a ? a.replace(/\r/g, "") : a
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var e = $(b).rules(), a = !1, g = this.elementValue(b), h, m;
                for (m in e) {
                    var k = {
                        method: m,
                        parameters: e[m]
                    };
                    try {
                        if (h = $.validator.methods[m].call(this, g, b, k.parameters),
                            "dependency-mismatch" === h)
                            a = !0;
                        else {
                            a = !1;
                            if ("pending" === h) {
                                this.toHide = this.toHide.not(this.errorsFor(b));
                                return
                            }
                            if (!h)
                                return this.formatAndAdd(b, k),
                                    !1
                        }
                    } catch (n) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + k.method + "' method.", n),
                            n;
                    }
                }
                if (!a)
                    return this.objectLength(e) && this.successList.push(b),
                        !0
            },
            customDataMessage: function(b, e) {
                return $(b).data("msg-" + e.toLowerCase()) || b.attributes && $(b).attr("data-msg-" + e.toLowerCase())
            },
            customMessage: function(b, $) {
                var a = this.settings.messages[b];
                return a && (a.constructor === String ? a : a[$])
            },
            findDefined: function() {
                for (var b = 0; b < arguments.length; b++)
                    if (void 0 !== arguments[b])
                        return arguments[b]
            },
            defaultMessage: function(b, e) {
                return this.findDefined(this.customMessage(b.name, e), this.customDataMessage(b, e), !this.settings.ignoreTitle && b.title || void 0, $.validator.messages[e], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(b, e) {
                var a = this.defaultMessage(b, e.method)
                    , g = /\$?\{(\$+)\}/g;
                "function" === typeof a ? a = a.call(this, e.parameters, b) : g.test(a) && (a = $.validator.format(a.replace(g, "{$1}"), e.parameters));
                this.errorList.push({
                    message: a,
                    element: b
                });
                this.errorMap[b.name] = a;
                this.submitted[b.name] = a
            },
            addWrapper: function(b) {
                this.settings.wrapper && (b = b.add(b.parent(this.settings.wrapper)));
                return b
            },
            defaultShowErrors: function() {
                var b, $;
                for (b = 0; this.errorList[b]; b++)
                    $ = this.errorList[b],
                    this.settings.highlight && this.settings.highlight.call(this, $.element, this.settings.errorClass, this.settings.validClass),
                        this.showLabel($.element, $.message);
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success)
                    for (b = 0; this.successList[b]; b++)
                        this.showLabel(this.successList[b]);
                if (this.settings.unhighlight)
                    for (b = 0,
                             $ = this.validElements(); $[b]; b++)
                        this.settings.unhighlight.call(this, $[b], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, e) {
                var a = this.errorsFor(b);
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                    a.html(e)) : (a = $("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(e || ""),
                this.settings.wrapper && (a = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(a).length || (this.settings.errorPlacement ? this.settings.errorPlacement(a, $(b)) : a.insertAfter(b)));
                !e && this.settings.success && (a.text(""),
                    "string" === typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, b));
                this.toShow = this.toShow.add(a)
            },
            errorsFor: function(b) {
                var e = this.idOrName(b);
                return this.errors().filter(function() {
                    return $(this).attr("for") === e
                })
            },
            idOrName: function(b) {
                return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
            },
            validationTargetFor: function(b) {
                this.checkable(b) && (b = this.findByName(b.name).not(this.settings.ignore)[0]);
                return b
            },
            checkable: function(b) {
                return /radio|checkbox/i.test(b.type)
            },
            findByName: function(b) {
                return $(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function(b, e) {
                switch (e.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected", e).length;
                    case "input":
                        if (this.checkable(e))
                            return this.findByName(e.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(b, $) {
                return this.dependTypes[typeof b] ? this.dependTypes[typeof b](b, $) : !0
            },
            dependTypes: {
                "boolean": function(b, $) {
                    return b
                },
                string: function(b, e) {
                    return !!$(b, e.form).length
                },
                "function": function(b, $) {
                    return b($)
                }
            },
            optional: function(b) {
                var e = this.elementValue(b);
                return !$.validator.methods.required.call(this, e, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++,
                    this.pending[b.name] = !0)
            },
            stopRequest: function(b, e) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[b.name];
                e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? ($(this.currentForm).submit(),
                    this.formSubmitted = !1) : !e && (0 === this.pendingRequest && this.formSubmitted) && ($(this.currentForm).triggerHandler("invalid-form", [this]),
                    this.formSubmitted = !1)
            },
            previousValue: function(b) {
                return $.data(b, "previousValue") || $.data(b, "previousValue", {
                        old: null ,
                        valid: !0,
                        message: this.defaultMessage(b, "remote")
                    })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, e) {
            b.constructor === String ? this.classRuleSettings[b] = e : $.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var e = {};
            (b = $(b).attr("class")) && $.each(b.split(" "), function() {
                this in $.validator.classRuleSettings && $.extend(e, $.validator.classRuleSettings[this])
            });
            return e
        },
        attributeRules: function(b) {
            var e = {};
            b = $(b);
            var a = b[0].getAttribute("type"), g;
            for (g in $.validator.methods) {
                var h;
                "required" === g ? (h = b.get(0).getAttribute(g),
                "" === h && (h = !0),
                    h = !!h) : h = b.attr(g);
                /min|max/.test(g) && (null === a || /number|range|text/.test(a)) && (h = Number(h));
                h ? e[g] = h : a === g && "range" !== a && (e[g] = !0)
            }
            e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength;
            return e
        },
        dataRules: function(b) {
            var e, a = {}, g = $(b);
            for (e in $.validator.methods)
                b = g.data("rule-" + e.toLowerCase()),
                void 0 !== b && (a[e] = b);
            return a
        },
        staticRules: function(b) {
            var e = {}
                , a = $.data(b.form, "validator");
            a.settings.rules && (e = $.validator.normalizeRule(a.settings.rules[b.name]) || {});
            return e
        },
        normalizeRules: function(b, e) {
            $.each(b, function(a, g) {
                if (!1 === g)
                    delete b[a];
                else if (g.param || g.depends) {
                    var h = !0;
                    switch (typeof g.depends) {
                        case "string":
                            h = !!$(g.depends, e.form).length;
                            break;
                        case "function":
                            h = g.depends.call(e, e)
                    }
                    h ? b[a] = void 0 !== g.param ? g.param : !0 : delete b[a]
                }
            });
            $.each(b, function(a, g) {
                b[a] = $.isFunction(g) ? g(e) : g
            });
            $.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            });
            $.each(["rangelength", "range"], function() {
                var a;
                b[this] && ($.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" === typeof b[this] && (a = b[this].split(/[\s,]+/),
                    b[this] = [Number(a[0]), Number(a[1])]))
            });
            $.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max],
                delete b.min,
                delete b.max),
            b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
                delete b.minlength,
                delete b.maxlength));
            return b
        },
        normalizeRule: function(b) {
            if ("string" === typeof b) {
                var e = {};
                $.each(b.split(/\s/), function() {
                    e[this] = !0
                });
                b = e
            }
            return b
        },
        addMethod: function(b, e, a) {
            $.validator.methods[b] = e;
            $.validator.messages[b] = void 0 !== a ? a : $.validator.messages[b];
            3 > e.length && $.validator.addClassRules(b, $.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, e, a) {
                return this.depend(a, e) ? "select" === e.nodeName.toLowerCase() ? (b = $(e).val()) && 0 < b.length : this.checkable(e) ? 0 < this.getLength(b, e) : 0 < $.trim(b).length : "dependency-mismatch"
            },
            email: function(b, $) {
                return this.optional($) || /^((([a-z]|\$|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\$|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\$|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\$|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\$|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(b)
            },
            url: function(b, $) {
                return this.optional($) || /^(https?|s?ftp):\/\/(((([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\$|[1-9]\$|1\$\$|2[0-4]\$|25[0-5])\.(\$|[1-9]\$|1\$\$|2[0-4]\$|25[0-5])\.(\$|[1-9]\$|1\$\$|2[0-4]\$|25[0-5])\.(\$|[1-9]\$|1\$\$|2[0-4]\$|25[0-5]))|((([a-z]|\$|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\$|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\$|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\$*)?)(\/((([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\$|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(b)
            },
            date: function(b, $) {
                return this.optional($) || !/Invalid|NaN/.test((new Date(b)).toString())
            },
            dateISO: function(b, $) {
                return this.optional($) || /^\${4}[\/\-]\${1,2}[\/\-]\${1,2}$/.test(b)
            },
            number: function(b, $) {
                return this.optional($) || /^-?(?:\$+|\${1,3}(?:,\${3})+)?(?:\.\$+)?$/.test(b)
            },
            digits: function(b, $) {
                return this.optional($) || /^\$+$/.test(b)
            },
            creditcard: function(b, $) {
                if (this.optional($))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(b))
                    return !1;
                var a = 0
                    , g = 0
                    , h = !1;
                b = b.replace(/\D/g, "");
                for (var m = b.length - 1; 0 <= m; m--)
                    g = b.charAt(m),
                        g = parseInt(g, 10),
                    h && 9 < (g *= 2) && (g -= 9),
                        a += g,
                        h = !h;
                return 0 === a % 10
            },
            minlength: function(b, e, a) {
                b = $.isArray(b) ? b.length : this.getLength($.trim(b), e);
                return this.optional(e) || b >= a
            },
            maxlength: function(b, e, a) {
                b = $.isArray(b) ? b.length : this.getLength($.trim(b), e);
                return this.optional(e) || b <= a
            },
            rangelength: function(b, e, a) {
                b = $.isArray(b) ? b.length : this.getLength($.trim(b), e);
                return this.optional(e) || b >= a[0] && b <= a[1]
            },
            min: function(b, $, a) {
                return this.optional($) || b >= a
            },
            max: function(b, $, a) {
                return this.optional($) || b <= a
            },
            range: function(b, $, a) {
                return this.optional($) || b >= a[0] && b <= a[1]
            },
            equalTo: function(b, e, a) {
                a = $(a);
                this.settings.onfocusout && a.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    $(e).valid()
                });
                return b === a.val()
            },
            remote: function(b, e, a) {
                if (this.optional(e))
                    return "dependency-mismatch";
                var g = this.previousValue(e);
                this.settings.messages[e.name] || (this.settings.messages[e.name] = {});
                g.originalMessage = this.settings.messages[e.name].remote;
                this.settings.messages[e.name].remote = g.message;
                a = "string" === typeof a && {
                        url: a
                    } || a;
                if (g.old === b)
                    return g.valid;
                g.old = b;
                var h = this;
                this.startRequest(e);
                var m = {};
                m[e.name] = b;
                $.ajax($.extend(!0, {
                    url: a,
                    mode: "abort",
                    port: "validate" + e.name,
                    dataType: "json",
                    data: m,
                    success: function(a) {
                        h.settings.messages[e.name].remote = g.originalMessage;
                        var m = !0 === a || "true" === a;
                        if (m) {
                            var q = h.formSubmitted;
                            h.prepareElement(e);
                            h.formSubmitted = q;
                            h.successList.push(e);
                            delete h.invalid[e.name];
                            h.showErrors()
                        } else
                            q = {},
                                a = a || h.defaultMessage(e, "remote"),
                                q[e.name] = g.message = $.isFunction(a) ? a(b) : a,
                                h.invalid[e.name] = !0,
                                h.showErrors(q);
                        g.valid = m;
                        h.stopRequest(e, m)
                    }
                }, a));
                return "pending"
            }
        }
    });
    $.format = $.validator.format
})(jQuery);

(function($) {
    $.extend($.fn, {
        validateDelegate: function(b, e, a) {
            return this.bind(e, function(e) {
                var h = $(e.target);
                if (h.is(b))
                    return a.apply(h, arguments)
            })
        }
    })
})(jQuery);