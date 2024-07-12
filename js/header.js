/*-- Dynamic Header is named "header" - previously was "nav bar" --*/
header.innerHTML =
`
<header>

<div class="container"> 
    <div class="header">
        <div class="icon-bar" onclick="Show()">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    
    <ul id="header-list">
        <li class="close"><span onclick="Hide()">x</span></li>
        <li><a href="Index.html">Welcome</a></li>
        <li><a href="Tenant.html">Tenant</a></li>
        <li><a href="Property Owner.html">Property Owner</a></li>
        <li><a href="Agent.html">Real Estate Agent</a></li>
        </ul>
    </div>
        
    <div class="logo"><img src="Images/RC.png" style="height: 60px" width="apple-touch-icon"> 
    </div>

    <button type="submit" class="button1"><a href="">SIGN UP / LOG IN</a></button>

</div> 
</header>

`;