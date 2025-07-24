import './App.css'
import AppItem from './Components/AppItem'
import NavbarComponent from './Components/NavbarComponent'
import accountingImg from "./assets/accounting.png";
import saleImg from "./assets/sale.png";
import settingImg from "./assets/settings.png";
import recruitmentImg from "./assets/recruitment.png";
import inventoryImg from "./assets/inventory.png";
import financeImg from "./assets/finance.png";
import employeesImg from "./assets/employees.png";
import crmImg from "./assets/crm.png";
import attendanceImg from "./assets/attendance.png";

const App = () => {

  return (
    <main className='bg-whitesmoke h-screen'>

      {/* Navbar */}
      <NavbarComponent />

      {/* App */}
      <section className="mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 lg:gap-6 xl:gap-x-0 py-20 sm:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <AppItem
          title="Accounting"
          imageUrl={accountingImg}
        />
        <AppItem
          title="Sales"
          imageUrl={saleImg}
        />
        <AppItem
          title="Finance"
          imageUrl={financeImg}
        />
        <AppItem
          title="Recrultment"
          imageUrl={recruitmentImg}
        />
        <AppItem
          title="Attendance"
          imageUrl={attendanceImg}
        />
        <AppItem
          title="Employees"
          imageUrl={employeesImg}
        />
        <AppItem
          title="Settings"
          imageUrl={settingImg}
        />
        <AppItem
          title="CRM"
          imageUrl={crmImg}
        />
        <AppItem
          title="Inventory"
          imageUrl={inventoryImg}
        />
      </section>
    </main>
  )
}

export default App
