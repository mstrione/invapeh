package ar.com.invap.eh.webservice;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

/**
 * Created by Fernandez Szama on 25/02/2016.
 */
public class JerseyApplication extends ResourceConfig {

    public JerseyApplication() {
        register(new JacksonFeature());
        register(new CdiHk2Binder());
    }
}
