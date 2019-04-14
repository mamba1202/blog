##### 全部代码
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>css实现饼图</title>
</head>
<body>
<div class="round"></div>
</body>
</html>

.round{
    width:200px;height:200px;
    border-radius: 50%;
    background: yellowgreen;
    background-image: linear-gradient(to right,transparent 50%,#655 0);
}
.round::before{
    content:'';
    display: block;
    margin-left: 50%;
    height:100%;
    background-color: inherit;
    border-radius: 0 100% 100% 0 /50%;
    transform-origin: left;
    transform: rotate(.01turn);
    animation: spin 1s linear infinite,
                changeBG 2s step-end infinite;
}

@keyframes spin{
    to {transform: rotate(.5turn)}
}

@keyframes changeBG{
    50% {background-color: #655;}
}
```