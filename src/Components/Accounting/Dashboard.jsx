import SalesCard from './SalesCard';
import NavbarComponentAC from './NavbarComponent';
import PurchasesCard from './PurchasesCard';
import BankCard from './BankCard';
import MiscellaneousOperationCard from './MiscellaneousOperationCard';
import PointofSaleCard from './PointofSaleCard';
import TaxReturnCard from './TaxReturnCard';

const DashboardAccounting = () => {
    return (
        <main>
            <NavbarComponentAC />
            {/* Main Content */}
            <section className="px-5 pt-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                <SalesCard />
                <PurchasesCard />
                <BankCard />
                <MiscellaneousOperationCard />
                <PointofSaleCard />
                <TaxReturnCard />
            </section>
        </main>
    );
};

export default DashboardAccounting;
