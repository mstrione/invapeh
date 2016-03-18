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
public class JerseyWebService {

    @Inject
    private EntityManager entityManager;

    @GET
    @Path("echo")
    public String echo(@QueryParam("param") String param) {
        return param;
    }

    @POST
    @Path("testEntity")
    public TestEntity saveCrustaceo(TestEntity testEntity) {
        entityManager.getTransaction().begin();
        TestEntity testEntityGuardado = entityManager.merge(testEntity);
        entityManager.getTransaction().commit();
        return testEntityGuardado;
    }

    @GET
    @Path("crustaceo/{id}")
    public TestEntity findCrustaceoById(@PathParam("id") Long id) {
        return entityManager.find(TestEntity.class, id);
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
    public List<TestEntity> listCrustaceo() {
        TypedQuery<TestEntity> query = entityManager.createQuery("select c from TestEntity c", TestEntity.class);
        return query.getResultList();
    }
}
