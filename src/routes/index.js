import { Router } from "express";

const router = Router();

//Rutas de la pagina MAIN//
router.get("/", (req, res) => res.render("index", {title: "First Web with Node"}));

router.get("/about", (req, res) => res.render("about", {title: "About Me" }));

router.get("/contact", (req, res) => res.render("contact", {title: "Contac Page" }));

export default router;
