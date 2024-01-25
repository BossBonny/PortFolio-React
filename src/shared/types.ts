export enum SelectedPage {
    Home = "home",
    About = "about",
    OurProjects = "ourprojects",
    ContactUs = "contactus"
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}