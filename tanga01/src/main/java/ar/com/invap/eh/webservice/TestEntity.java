package ar.com.invap.eh.webservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.Objects;

/**
 * Created by Fernandez Szama on 25/02/2016.
 */
@Entity
@XmlRootElement
public class TestEntity implements Serializable {

    private Long id;
    private String nombre;
    private Integer cantidadPinzas;

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getCantidadPinzas() {
        return cantidadPinzas;
    }

    public void setCantidadPinzas(Integer cantidadPinzas) {
        this.cantidadPinzas = cantidadPinzas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TestEntity testEntity = (TestEntity) o;
        return Objects.equals(id, testEntity.id) &&
                Objects.equals(nombre, testEntity.nombre) &&
                Objects.equals(cantidadPinzas, testEntity.cantidadPinzas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, cantidadPinzas);
    }
}
