const formulirBaptisUsers = async () => {
  try {
    const req = await fetch("/api/baptis", { method: "GET" });
    if (!req.ok) throw new Error(req.statusText || "");

    const res = await req.json();
    return res || [];
  } catch (error) {
    throw new Error(error.message || "");
  }
};

const deleteformulirBaptisUsers = async (id) => {
  try {
    const req = await fetch(`/api/baptis/${id}`, { method: "DELETE" });
    if (!req.ok) throw new Error(req.statusText || "");

    const res = await req.json();
    return res || null;
  } catch (error) {
    throw new Error(error.message || "");
  }
};

export const getUsers = async () => {
  try {
    const req = await fetch(`/api/baptis`, {
      method: "GET",
      cache: "no-store",
    });
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(error.message || "");
  }
};

const deleteCalonBaptis = async (id) => {
  try {
    const req = await fetch(`/api/baptis/${id}`, {
      method: "DELETE",
    });
    return await req.json();
  } catch (error) {
    throw new Error(error.message || "");
  }
};

const deleteCalonHistoryBaptis = async (id) => {
  try {
    const req = await fetch(`/api/baptis/history/${id}`, {
      method: "DELETE",
    });
    return await req.json();
  } catch (error) {
    throw new Error(error.message || "");
  }
};

export const clientApi = {
  formulirBaptisUsers,
  deleteformulirBaptisUsers,
  getUsers,
  deleteCalonBaptis,
  deleteCalonHistoryBaptis,
};
