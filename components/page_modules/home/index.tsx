import {Questions} from "@/components/page_modules/home/components/questions";
import {Container} from "@/components/container/ui.container";

export function Home() {
    return (
        <div className="w-full">
            <Container>
                <Questions/>
            </Container>
        </div>
    )
}