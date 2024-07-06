
header.innerHTML =`
<nav>
    <div class="container">
        <div class="logo">
        <a href="#"><img src="" alt="logo goes here"></a>
        </div>

        <div class="navbar">
            <div class="icon-bar" onclick="Show()">
            <i></i>
            <i></i>
            <i></i>
            </div>

            <ul id="nav-lists">
            <li class="close"><span onclick="Hide()">×</span></li>
            <li><a href="index.html">Welcome</a></li>
            <li><a href="Tenant.html">Tenants</a></li>
            <li><a href="Property Owner.html">Property Owners</a></li>
            <li><a href="Agents.html"> Real Estate Agents</a></li>
            </ul>
        </div>
    </div> 
</nav>
`;