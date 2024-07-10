/*-- Dynamic Header is named "header" - previously was "nav bar" --*/
header.innerHTML =
`
<header>
    <div class="container">
        <div class="logo">
        <a href="landingpage.html"><img src="Images/transparent-bg-logo.PNG" alt="logo goes here"></a>
        </div>

        <div class="header">
            <div class="icon-bar" onclick="Show()">
            <i></i>
            <i></i>
            <i></i>
            </div>

            <ul id="header-lists">
            <li class="close"><span onclick="Hide()"></span></li>
            <li><a href="Index.html">Welcome</a></li>
            <li><a href="Tenant.html">Tenant</a></li>
            <li><a href="Property Owner.html">Property Owner</a></li>
            <li><a href="Agent.html"> Real Estate Agent</a></li>
            </ul>
        </div>
    </div> 
</header>

`;