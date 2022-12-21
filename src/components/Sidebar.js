import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <Link to="/dashboard">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </Link>

        {/* <!-- Divider --> */}

        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}

        <div class="sidebar-heading">Interface</div>

        {/* <!-- Add Student Collapse Menu --> */}

        <hr class="sidebar-divider" />

        <Link to="/add-student">
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Add Student</span>
            </a>
          </li>
        </Link>

        {/* <!-- Nav Item - All Students Collapse Menu --> */}

        <Link to="/all-students">
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="fas fa-fw fa-wrench"></i>
              <span>All Students</span>
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default SideBar;
