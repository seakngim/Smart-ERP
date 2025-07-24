import { LuChevronRight, LuClock, LuCog, LuMessagesSquare } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

const NavbarComponent = () => {
    const { company } = useAuth();

    return (

        <nav className="flex items-center justify-between p-2">
            <LuChevronRight />

            {/* nav-right */}
            <section className="flex gap-2 items-center">
                <LuMessagesSquare />
                <LuClock />
                <p>{company || "My Company"}</p>
                <LuCog />

                {/* Avatar */}
                <img
                    src="https://i.pravatar.cc/40"
                    alt="Avatar"
                    className="w-8 h-8 rounded-lg p-0.5 border-2 border-primary"
                />
            </section>
        </nav>



    )
}

export default NavbarComponent;