using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GoT.CastSite1.Controllers
{
    public class CasterController : Controller
    {
        //
        // GET: /Caster/

        public ActionResult Index(int id)
        {
            ViewBag.id = id;
            return View();
        }

    }
}
