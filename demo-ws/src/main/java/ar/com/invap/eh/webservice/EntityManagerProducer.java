package ar.com.invap.eh.webservice;

import org.h2.tools.Server;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Disposes;
import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Properties;

/**
 * Created by Fernandez Szama on 25/02/2016.
 */
@ApplicationScoped
public class EntityManagerProducer {

    private static EntityManagerFactory emf;
    private Server server;

    @PostConstruct
    private void createEntityManagerFactory() {
        startDb();

        Properties properties = readProperties();
        emf = Persistence.createEntityManagerFactory("pu", properties);
    }

    @PreDestroy
    private void stopDb() {
        server.stop();
    }

    private void startDb() {
        server = new Server();
        try {
            server.createTcpServer().start();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private Properties readProperties() {
        Properties properties = new Properties();
        try {
            properties.load(new FileInputStream("config.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return properties;
    }

    @Produces
    @RequestScoped
    public EntityManager createEntityManager() {
        return emf.createEntityManager();
    }

    public void close(@Disposes EntityManager entityManager) {
        entityManager.close();
    }
}
