package ar.com.invap.eh.webservice;

import org.glassfish.hk2.utilities.binding.AbstractBinder;

import javax.enterprise.context.spi.CreationalContext;
import javax.enterprise.inject.spi.Bean;
import javax.enterprise.inject.spi.BeanManager;
import javax.enterprise.inject.spi.CDI;
import javax.persistence.EntityManager;

/**
 * Created by Fernandez Szama on 25/02/2016.
 */
public class CdiHk2Binder extends AbstractBinder {

    @Override
    protected void configure() {
        BeanManager beanManager = CDI.current().getBeanManager();
        bind(getBean(beanManager, JerseyWebService.class)).to(JerseyWebService.class);
        bind(getBean(beanManager, EntityManager.class)).to(EntityManager.class);
    }

    private <T> T getBean(BeanManager bm, Class<T> clazz) {
        Bean<T> bean = (Bean<T>) bm.getBeans(clazz).iterator().next();
        CreationalContext<T> ctx = bm.createCreationalContext(bean);
        return (T) bm.getReference(bean, clazz, ctx);
    }

}
