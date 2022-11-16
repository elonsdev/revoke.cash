import DashboardBody from './DashboardBody';
import ConnectSection from './header/ConnectSection';
import DashboardHeader from './header/DashboardHeader';

const Dashboard = () => {
  return (
    <div className="justify-center" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="Dashboard ">
        <ConnectSection />
        <DashboardHeader />

        <div className="my-2 text-center mx-auto">
          <DashboardBody />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
