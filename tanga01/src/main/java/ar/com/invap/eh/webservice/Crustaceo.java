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
public class Crustaceo implements Serializable {

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
        Crustaceo crustaceo = (Crustaceo) o;
        return Objects.equals(id, crustaceo.id) &&
                Objects.equals(nombre, crustaceo.nombre) &&
                Objects.equals(cantidadPinzas, crustaceo.cantidadPinzas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, cantidadPinzas);
    }
}
