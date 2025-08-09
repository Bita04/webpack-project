import renderPage from "./render/page";
import request from "./tools/request";
import { URL } from "./tools/constants";
request(URL).then((data)=>renderPage(data));
