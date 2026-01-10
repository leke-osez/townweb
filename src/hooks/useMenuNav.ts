import { useNavigate } from "@tanstack/react-router";

export const dropDownList: Record<
  string,
  { id: string; name: string }[]
> = {
  features: [
    { id: "featuresOverview", name: "Features Overview" },
    {
      id: "emergencyMassNotification",
      name: "Emergency Mass Notification System",
    },
    {
      id: "facilityBookingSoftware",
      name: "Facility Booking Software",
    },
    {
      id: "governmentWebsiteHosting",
      name: "Government Website Hosting",
    },
    {
      id: "localBusinessDirectorySoftware",
      name: "Local Business Directory Software",
    },
  ],
  services: [
    { id: "servicesOverview", name: "Services Overview" },
    { id: "adaCompliance", name: "ADA 508 Compliance" },
    { id: "dotgovRegistration", name: "Dotgov Registration" },
    {
      id: "localGovernmentWebsiteDesign",
      name: "Local Government Website Design",
    },
  ],
};

const useMenuNav = ({
  setDropDownMenuState,
  options,
}: {
  setDropDownMenuState: (menu: string) => void;
  options: Record<string, () => void>;
}) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu: string) => {
    switch (menu) {
      case "services":
      case "features":
      case "request-quote":
        setDropDownMenuState(menu);
        break;
      case "resources":
        navigate({ to: `/blog` });
        break;

      default:
        navigate({ to: `/${menu}` });
        break;
    }
    options[menu as keyof typeof options]();
  };
  return { handleMenuClick };
};

export default useMenuNav;
