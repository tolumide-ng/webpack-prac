import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();

import "./main.css";

import { run } from "./app/app";

run(alertService, componentService);
