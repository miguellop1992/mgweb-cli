import { environment } from '../../environments/environment';


export class URLHelper {

    private static instance;

    public URL_PANEL: string = `http://${document.domain}/panel`;
    public URL_HOME: string = `http://${document.domain}`;
    public URL_LOGIN: string = `${this.URL_HOME}/login`;
    

    private constructor() {

        if (!environment.production) {
            this.URL_PANEL = `http://${document.domain}:4201/panel/profile`;
            this.URL_HOME = `http://${document.domain}:4201/panel`;
            // this.URL_HOME = `http://${document.domain}:4200`;
            this.URL_LOGIN = `${this.URL_HOME}/login`;
            
        }
    }

    public static get Instance(): URLHelper {
        return this.instance || (this.instance = new URLHelper());
    }
}
