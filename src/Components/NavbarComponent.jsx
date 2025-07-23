import { LuChevronRight, LuClock, LuCog, LuMessagesSquare } from "react-icons/lu";

const NavbarComponent = () => {
    return (

        <nav className="flex items-center justify-between p-2">
            <LuChevronRight />

            {/* nav-right */}
            <section className="flex gap-2 items-center">
                <LuMessagesSquare />
                <LuClock />
                <p>My Company (Phnom Pennh)</p>
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