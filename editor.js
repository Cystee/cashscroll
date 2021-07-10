//editor.js
(function() {
    /* Register the buttons */
    tinymce.create('tinymce.plugins.MyButtons', {
        init: function(ed, url) {
            /**
             * 定义按钮子菜单
             */
            ed.addButton('button_eek', {
                text: '样式',
                type: 'menubutton',
                menu: [{
                        text: '其他语言代码块',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入其他语言代码',
                                body: [{
                                        type: 'textbox',
                                        name: 'textboxName',
                                        label: '语言',
                                        value: 'python'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'textboxCode',
                                        label: '代码',
                                        multiline: true,
                                        minWidth: 500,
                                        minHeight: 100,
                                        spellcheck: false
                                    }
                                ],
                                onsubmit: function(e) {
                                    ed.insertContent('<pre><code class="language-' + e.data.textboxName + '">' + ed.dom.encode(e.data.textboxCode) + '</code></pre>');
                                }
                            })
                        }
                    },
                    {
                        text: '其他语言行内代码',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入其他语言行内代码',
                                body: [{
                                        type: 'textbox',
                                        name: 'textboxName',
                                        label: '语言',
                                        value: 'python'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'textboxCode',
                                        label: '代码',
                                        multiline: true,
                                        minWidth: 500,
                                        minHeight: 100,
                                        spellcheck: false
                                    }
                                ],
                                onsubmit: function(e) {
                                    ed.insertContent('<code class="language-' + e.data.textboxName + '">' + ed.dom.encode(e.data.textboxCode) + '</code>');
                                }
                            })
                        }
                    },
                    {
                        text: 'HTML 代码块',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入 HTML 代码',
                                body: [{
                                    type: 'textbox',
                                    name: 'textboxCode',
                                    multiline: true,
                                    minWidth: 500,
                                    minHeight: 100,
                                    spellcheck: false
                                }],
                                onsubmit: function(e) {
                                    ed.insertContent('<pre><code class="language-markup">' + ed.dom.encode(e.data.textboxCode) + '</code></pre>');
                                }
                            })
                        }
                    },
                    {
                        text: 'HTML 行内代码',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入 HTML 行内代码',
                                body: [{
                                    type: 'textbox',
                                    name: 'textboxCode',
                                    multiline: true,
                                    minWidth: 500,
                                    minHeight: 100,
                                    spellcheck: false
                                }],
                                onsubmit: function(e) {
                                    ed.insertContent('<code class="language-markup">' + ed.dom.encode(e.data.textboxCode) + '</code>');
                                }
                            })
                        }
                    },
                    {
                        text: '预格式链接块',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入预格式链接',
                                body: [{
                                    type: 'textbox',
                                    name: 'textboxCode',
                                    multiline: true,
                                    minWidth: 500,
                                    minHeight: 100,
                                    spellcheck: false
                                }],
                                onsubmit: function(e) {
                                    ed.insertContent('<pre class="prelink">' + ed.dom.encode(e.data.textboxCode) + '</pre>');
                                }
                            })
                        }
                    },
                    {
                        text: '预格式行内链接',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入预格式链接',
                                body: [{
                                    type: 'textbox',
                                    name: 'textboxCode',
                                    multiline: true,
                                    minWidth: 500,
                                    minHeight: 100,
                                    spellcheck: false
                                }],
                                onsubmit: function(e) {
                                    ed.insertContent('<span class="prelink">' + ed.dom.encode(e.data.textboxCode) + '</span>');
                                }
                            })
                        }
                    },
                    {
                        text: 'MathJax 块',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入 MathJax 块',
                                body: [{
                                    type: 'textbox',
                                    name: 'textboxCode',
                                    multiline: true,
                                    minWidth: 500,
                                    minHeight: 100,
                                    spellcheck: false
                                }],
                                onsubmit: function(e) {
                                    ed.insertContent('$$' + ed.dom.encode(e.data.textboxCode) + '$$');
                                }
                            })
                        }
                    },
                    {
                        text: '行内 MathJax',
                        onclick: function() {
                            ed.windowManager.open({
                                title: '插入行内 MathJax',
                                body: [{
                                    type: 'textbox',
                                    name: 'textboxCode',
                                    multiline: true,
                                    minWidth: 500,
                                    minHeight: 100,
                                    spellcheck: false
                                }],
                                onsubmit: function(e) {
                                    ed.insertContent('$(' + ed.dom.encode(e.data.textboxCode) + ')$');
                                }
                            })
                        }
                    }

                ]
            });

            /**
             * 定义制表符
             */
            ed.addButton('button_green', {
                text: 'TAB',
                title: '插入制表符',
                onclick: function() {
                    ed.selection.setContent('\t');
                },
            });
            ed.addButton('button_MJ', {
                text: '引入 MathJax',
                onclick: function() {
                    ed.selection.setContent('<script type="text/x-mathjax-config">MathJax.Hub.Config({showProcessingMessages:false,messageStyle:"none",jax:["input/Tex","output/HTML-CSS"],tex2jax:{inlineMath:[[\'\$\(\',\'\)\$\'],["\\(","\\)"]],displayMath:[[\'\$\$\',\'\$\$\'],["\\[","\\]"]],skipTags:["script","noscript","style","textarea","pre","code","a","kbd"]},"HTML-CSS":{showMathMenu:false},TeX:{equationNumbers:{autoNumber:"AMS",useLabelIds:true}},});</script><script src="https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS_HTML" async></script>');
                },
            });

        },
        createControl: function(n, cm) {
            return null;
        },
    });
    /* Start the buttons */
    tinymce.PluginManager.add('my_button_script', tinymce.plugins.MyButtons);
})();