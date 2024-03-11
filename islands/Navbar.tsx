export default function Navbar() {
    return (
        <div>
            <div class="fixed flex h-auto w-full bg-black">
                <div class="w-1/3 float-left">
                    <h2 class="text-3xl mx-4 font-extrabold">Mikhela Aiken</h2>
                </div>
                <div class="flex flex-row justify-between w-1/2 mb-1 mt-auto ml-auto">
                    <a class="w-8 mx-auto text-center" href=""> Maps </a>
                    <a class="w-8 mx-auto text-center" href=""> Botany </a>
                    <a class="w-8 mx-auto text-center" href=""> Art </a>
                </div>
            </div>
            <div class="h-5">
            </div>
        </div>
    );
}
