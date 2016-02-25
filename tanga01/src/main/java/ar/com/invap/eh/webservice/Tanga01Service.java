package ar.com.invap.eh.webservice;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by Fernandez Szama on 25/02/2016.
 */
@Path("/")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@ApplicationScoped
public class Tanga01Service {

    @Inject
    private EntityManager entityManager;

    @GET
    @Path("echo")
    public String echo(@QueryParam("param") String param) {
        return param;
    }

    @POST
    @Path("crustaceo")
    public Crustaceo saveCrustaceo(Crustaceo crustaceo) {
        entityManager.getTransaction().begin();
        Crustaceo crustaceoGuardado = entityManager.merge(crustaceo);
        entityManager.getTransaction().commit();
        return crustaceoGuardado;
    }

    @GET
    @Path("crustaceo/{id}")
    public Crustaceo findCrustaceoById(@PathParam("id") Long id) {
        return entityManager.find(Crustaceo.class, id);
    }

    @DELETE
    @Path("crustaceo/{id}")
    public void removeCrustaceoById(@PathParam("id") Long id) {
        entityManager.getTransaction().begin();
        entityManager.remove(findCrustaceoById(id));
        entityManager.getTransaction().commit();
    }

    @GET
    @Path("crustaceo")
    public List<Crustaceo> listCrustaceo() {
        TypedQuery<Crustaceo> query = entityManager.createQuery("select c from Crustaceo c", Crustaceo.class);
        return query.getResultList();
    }
}
