let tn = [];
        let a;
        let n = 1;
        let s = "";
        let h;
        // let x=document.getElementById('screen').offsetLeft;
        // console.log(x);
        for (let i = 0; i < 20; i++) {
            tn[i] = document.getElementsByTagName('button')[i];
            if (i < 3)
             {
                tn[i].addEventListener('mousedown', () => {
                    tn[i].style.background = "rgb(100, 100, 100)";
                })
                tn[i].addEventListener('mouseup', () => {
                    tn[i].style.background = "rgb(144, 144, 144)";
                })
            }
            if (i >= 3) {
                if (i == 3 || i == 7 || i == 11 || i == 15 || i == 19) {
                    continue;
                }
                tn[i].addEventListener('mousedown', () => {
                    tn[i].style.background = "rgb(100, 100, 100)";
                })
                tn[i].addEventListener('mouseup', () => {
                    tn[i].style.background = "rgb(235, 235, 235)";
                })
            }
        }

        function postfix(s) 
        {
            let st = [];
            let s1 = "";
            for (let i = 0; i<s.length; i++) {
                if (s[i] == '+' || s[i] == '-' || s[i] == '✖' || s[i] == '➗' || s[i] == '^' || s[i] == '%') {
                    if (st.length == 0) {
                        st.push(s[i]);
                    } else {
                        if ((st[st.length - 1] == '✖' || st[st.length - 1] == '➗'))
                        {
                            if (s[i] == '+' || s[i] == '-')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                            else if (s[i] == '✖' || s[i] == '➗')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                            else if (s[i] == '^')
                            {
                                st.push(s[i]);
                            }
                        }
                        else if (st[st.length - 1] == '^')
                        {
                            if (s[i] == '✖' || s[i] == '➗')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                            else if (s[i] == '+' || s[i] == '-')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                            else if (s[i] == '^')
                            {
                                st.push(s[i]);
                            }
                        }
                        else if ((st[st.length - 1] == '+' || st[st.length - 1] == '-'))
                        {
                            if (s[i] == '✖' || s[i] == '➗') {
                                st.push(s[i]);
                            }
                            if (s[i] == '+' || s[i] == '-') {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            } else if (s[i] == '^') {
                                st.push(s[i]);
                            }
                        }
                        else if (st[st.length - 1] == '%')
                        {
                            if (s[i] == '✖' || s[i] == '➗')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                            else if (s[i] == '+' || s[i] == '-')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                            else if (s[i] == '^')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                            else if(s[i]=='%')
                            {
                                s1 = s1.concat(st[st.length - 1]);
                                s1 = s1.concat(' ');
                                st.pop();
                                st.push(s[i]);
                            }
                        }
                    }
                } else {
                    s1 = s1.concat(s[i]);
                    if (s[i + 1] == '+' || s[i + 1] == '-' || s[i + 1] == '✖' || s[i + 1] == '➗' || s[i + 1] == '^' || s[i + 1] == '%' ||
                        i==(s.length-1)) {
                        s1 = s1.concat(' ');
                    }
                }
            }
            while (!st.length == 0) {
                s1 = s1.concat(st[st.length - 1]);
                s1 = s1.concat(' ');
                st.pop();
            }
            return s1;
        }

        function evalute(s) {
            let st=[];
            s = postfix(s);
            let s1="";
            for (let i = 0; i<s.length; i++) {

                if (s[i] == '+' || s[i] == '-' || s[i] == '✖' || s[i] == '➗' || s[i] == '^' || s[i] == '%') {
                    let sum = 0.0;
                    switch (s[i]) {
                        case '✖':
                            sum += Number(st[st.length-1]);
                            st.pop();
                            sum *= Number(st[st.length-1]);
                            st.pop();
                            st.push(String(sum));
                            break;

                        case '➗':
                            sum += Number(st[st.length-1]);
                            st.pop();
                            sum = Number(st[st.length-1]) / sum;
                            st.pop();
                            st.push(String(sum));
                            break;

                        case '+':
                            sum += Number(st[st.length-1]);
                            st.pop();
                            sum += Number(st[st.length-1]);
                            st.pop();
                            st.push(String(sum));
                            break;

                        case '-':
                            sum += Number(st[st.length-1]);
                            st.pop();
                            sum = Number(st[st.length-1]) - sum;
                            st.pop();
                            st.push(String(sum));
                            break;

                        case '^':
                            sum += Number(st[st.length-1]);
                            st.pop();
                            sum = 1.0 * Math.pow(Number(st[st.length-1]), Number(sum));
                            st.pop();
                            st.push(String(sum));
                            break;
                        case '%':
                            sum += Number(st[st.length-1]);
                            st.pop();
                            sum = 1.0*Number(st[st.length-1])*sum/100;
                            st.pop();
                            st.push(String(sum));
                            break;
                    }
                } else if (s[i] != ' ') {
                    if (s[i + 1] == ' ') {
                        s1 = s1.concat(s[i]);
                        st.push(s1);
                        s1 = "";
                    } else {
                        s1 = s1.concat(s[i]);
                    }
                }
            }
            return st[st.length-1];
        }


        for (let i = 2; i < 19; i++) {
            s = "";
            tn[i].addEventListener('click', () => {
                if(s=="0")
                s="";
                if(i==3)
                {
                    s = s.concat('➗');
                }
                else
                s = s.concat(tn[i].textContent);
                if (s.length <= 11) {
                    document.getElementById('screen').style.fontSize = "35px";
                } else if (s.length > 11) {
                    document.getElementById('screen').style.fontSize = "18px";
                }
                document.getElementById('screen').innerHTML = s;
            })
        }
        tn[1].addEventListener('click', () => {
            s = "0";
            h = "";
            document.getElementById('store').innerHTML = h;
            document.getElementById('screen').style.fontSize = "35px";
            document.getElementById('store').style.fontSize = "18px";
            document.getElementById('screen').innerHTML = s;
            s = "";
        })
        tn[0].addEventListener('click', () => {
            let l = s.length;
            if (l <= 11) {
                document.getElementById('screen').style.fontSize = "35px";
                }
            if (l >= 1) {
                if(l==1)
                    s="0";
                else
                    s = s.substring(0, l - 1);
                }
            document.getElementById('screen').innerHTML = s;
        })
        tn[19].addEventListener('click', () => {
            h = s;
            h = h.concat('=');
            a = 350 - (h.length - 6) * 10.5;
            document.getElementById('store').style.right = a+"px";
            document.getElementById('store').innerHTML = h;
            s = evalute(s);
            if (s.length <= 11) {
                document.getElementById('screen').style.fontSize = "35px";
            } else if (s.length > 11) {
                document.getElementById('screen').style.fontSize = "18px";
            }
                document.getElementById('screen').innerHTML = s;
        })
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case "1":
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '2':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '3':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '4':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '5':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '6':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '7':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '8':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case "9":
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '0':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                         if(s=="0")
                            s="";
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '+':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '-':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '/':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                        s = s.concat('➗');
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '*':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                        s = s.concat('✖');
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '%':
                    if (s.length < 20) {
                        if (s.length >= 10) {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case '^':
                    if (s.length < 20)
                    {
                        if (s.length >= 10)
                        {
                            document.getElementById('screen').style.fontSize = "18px";
                            document.getElementById('store').style.fontSize = "14px";
                        }
                        s = s.concat(e.key);
                        document.getElementById('screen').innerHTML = s;
                    }
                    break;
                case "Escape":
                    s = "0";
                    h = "";
                    document.getElementById('store').innerHTML = h;
                    document.getElementById('screen').style.fontSize = "35px";
                    document.getElementById('store').style.fontSize = "18px";
                    document.getElementById('screen').innerHTML = s;
                    s = "";
                    break;
                case "Backspace":
                    let l = s.length;
                    if (l <= 11) {
                        document.getElementById('screen').style.fontSize = "35px";
                    }
                    if (l >= 1) {
                        if(l==1)
                            s="0";
                        else
                            s = s.substring(0, l - 1);
                    }
                    document.getElementById('screen').innerHTML = s;
                    break;
                case 'Enter':
                    h = s;
                    h = h.concat('=');
                    a = 350 - (h.length - 6) * 10.5;
                    document.getElementById('store').style.right = a+"px";
                    document.getElementById('store').innerHTML = h;
                    s = evalute(s);
                    if (s.length <= 11) {
                        document.getElementById('screen').style.fontSize = "35px";
                    } else if (s.length > 11) {
                        document.getElementById('screen').style.fontSize = "18px";
                    }
                    document.getElementById('screen').innerHTML = s;
                    break;
            }
        })