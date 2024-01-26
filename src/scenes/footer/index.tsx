import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) => {
    return <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="mt-5">Integer vehicula, risus at ultricies sagittis, eros nisi malesuada nibh, sit amet dapibus urna turpis placerat metus. Sed tincidunt eros diam, sed scelerisque eros efficitur ut. Sed et augue sit amet enim vulputate pretium sit amet et dolor. Vestibulum rhoncus dignissim elit, eu pellentesque nunc aliquet id. Morbi augue nulla, viverra vitae egestas eu, tempor rutrum ligula.</p>
                <p>© Whatever All Right Reserved</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">MNu daysfd as</p>
                <p className="my-5">whatever 2</p>
                <p >Ma dsfd as</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact us</h4>
                <p className="my-5">Contacto 1</p>
                <p className="my-5">Contacto 2 </p>
                <p>Numero telf</p>
            </div>
        </div>
    </footer>
}

export default Footer