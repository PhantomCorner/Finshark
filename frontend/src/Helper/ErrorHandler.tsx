import axios from "axios";
import { toast } from "react-toastify";
export const handleError = function (error: any) {
  if (axios.isAxiosError(error)) {
    var err = error.response;
    if (Array.isArray(err?.data.errors)) {
      for (let e of err.data.errors) {
        toast.warning(e.description);
      }
    } else if (typeof err?.data.errors === "object") {
      for (let e in err?.data.errors) {
        toast.warning(err.data.err[e]);
      }
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status == 401) {
      toast.warn("Please Login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      toast.warning(err.data);
    }
  }
};
