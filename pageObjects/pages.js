import { MainPage } from "./mainPage";
import { IntroPage } from "./introPage";
import { WritingTest } from "./writingTestPage";
import { BasePage } from "./basePage";
import { TodoPage } from "./todoPage";

class Pages {
    constructor() {
        this.base = new BasePage();
        this.main = new MainPage();
        this.intro = new IntroPage();
        this.writingTest = new WritingTest();
        this.todo = new TodoPage();
    }
}
export default Pages = new Pages();
